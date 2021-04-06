import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BodyGeneratorService} from '../body-generator.service';
import {PropertiesModel} from "../models/properties.model";
import {TypeEnum} from "../enums/type.enum";
import {RequiredEnum} from "../enums/required.enum";

@Component({
  selector: 'app-object-type',
  templateUrl: './object-type.component.html',
  styleUrls: ['./object-type.component.scss']
})
export class ObjectTypeComponent implements OnInit {


  @Input() property: PropertiesModel;
  @Output() propertyChange = new EventEmitter<PropertiesModel>();
  @Input() specId: any;

  constructor(private bodyGeneratorService: BodyGeneratorService) {
  }

  typeEnum = TypeEnum;
  requiredEnum = RequiredEnum;
  filesName: string[] = [];
  minimise = false;


  public get getType(): typeof TypeEnum {
    return TypeEnum;
  }

  ngOnInit(): void {

  }

  generateNewProperty(property: PropertiesModel) {
    if (property.type === TypeEnum.object) {
      property.properties = [];
      property.properties.push(new PropertiesModel());
    } else {
      property.properties = [];
    }
    this.propertyChange.emit(property);
  }

  addProperty(property: PropertiesModel) {
    property.properties.push(new PropertiesModel());
    this.propertyChange.emit(property);
  }

  deleteProprietyEmit(property) {
    const index = this.property.properties.indexOf(property, 0);
    if (index > -1) {
      this.property.properties.splice(index, 1);
    }
    this.updateProperty();
  }

  setRequired(required: RequiredEnum): void {
    this.property.required = required !== RequiredEnum.false;
  }

  updateProperty(): void {
    this.propertyChange.emit(this.property);
  }

  loadFileNames() {
    this.bodyGeneratorService.loadFilesList(localStorage.getItem('user_id'), this.specId).subscribe(value => {
      this.filesName = [];
      this.filesName = this.filesName.concat(value);
    });
  }

  loadFile(propertyModel: PropertiesModel, fileName: string) {
    this.bodyGeneratorService.downloadObject(localStorage.getItem('user_id'), this.specId, fileName).subscribe(value => {
      value.text().then(value1 => {
        const property = this.property.properties.findIndex((obj => obj.name === propertyModel.name));
        this.property.properties[property] = PropertiesModel.fromJson(PropertiesModel.fromYaml(value1), this.bodyGeneratorService);
        this.updateProperty();
      });
    });
  }
}
