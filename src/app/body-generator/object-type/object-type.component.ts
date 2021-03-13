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

  constructor() {
  }

  typeEnum = TypeEnum;
  requiredEnum = RequiredEnum;

  @Input() property: PropertiesModel;
  @Output() propertyChange = new EventEmitter<PropertiesModel>();
  @Output() propertyDelete = new EventEmitter<PropertiesModel>();

  public get getType(): typeof TypeEnum {
    return TypeEnum;
  }

  ngOnInit(): void {
  }

  generateNewProperty(property: PropertiesModel) {
    if (property.type === TypeEnum.object) {
      this.property.properties = [];
      this.property.properties.push(new PropertiesModel());
    } else {
      this.property.properties = null;
      this.propertyChange.emit(this.property);
    }
  }

  addProperty() {
    this.property.properties.push(new PropertiesModel());
    this.propertyChange.emit(this.property);
  }

  deleteProprietyEmit() {
    this.propertyDelete.emit(this.property);
  }

  deletePropriety(property: PropertiesModel) {
    const index = this.property.properties.indexOf(property, 0);
    if (index > -1) {
      this.property.properties.splice(index, 1);
    }
    this.updateProperty();
  }

  updateProperty(): void {
    this.propertyChange.emit(this.property);
  }
}
