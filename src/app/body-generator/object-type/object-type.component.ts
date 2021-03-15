import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEnum} from '../../../enums/type.enum';
import {RequiredEnum} from '../../../enums/required.enum';
import {PropertiesModel} from '../../../models/properties.model';

@Component({
  selector: 'app-object-type',
  templateUrl: './object-type.component.html',
  styleUrls: ['./object-type.component.scss']
})
export class ObjectTypeComponent implements OnInit {


  @Input() property: PropertiesModel;
  @Output() propertyChange = new EventEmitter<PropertiesModel>();

  constructor() {
  }

  typeEnum = TypeEnum;
  requiredEnum = RequiredEnum;

  public get getType(): typeof TypeEnum {
    return TypeEnum;
  }

  ngOnInit(): void {
  }

  generateNewProperty(property: PropertiesModel) {
    if (property.type === TypeEnum.object) {
      property.properties = [];
      property.properties.push(new PropertiesModel());
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
}
