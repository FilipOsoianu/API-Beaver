import {PropertiesModel} from './properties.model';
import {TypeEnum} from '../enums/type.enum';

export class ObjectTypeModel {
  name: string;
  properties: PropertiesModel[];

  constructor() {
  }


  toJSON() {
    const obj = {};
    obj[this.name] = {
      properties: this.properties
    };
    return obj;
  }


  // const file = new File([stringify(parse(JSON.stringify(this.objectTypeModel)))], 'jora.raml');
  // saveAs(file, 'hello world.raml');

  toRAMLObject() {
    const object = {};
    const propertiesMap = [];
    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.type === TypeEnum.object) {
          propertiesMap.push(value.toRAMLObject());
          console.log(value);
          console.log('new file');
        } else {
          propertiesMap.push(value);
        }
      });
    }
    object[this.name] = propertiesMap;
    return object;
  }



}

