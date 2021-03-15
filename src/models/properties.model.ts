import {TypeEnum} from '../enums/type.enum';
import {saveAs} from 'file-saver';
import {parse, stringify} from 'yaml';

export class PropertiesModel {
  name: string;
  type: TypeEnum;
  required: boolean;
  example: string;
  properties: PropertiesModel[];

  constructor(type?: TypeEnum) {
    if (type !== null) {
      this.type = type;
      if (type === TypeEnum.object) {
        this.properties = [];
      }
    }
  }

  toJSON() {
    const obj = {};
    if (this.properties != null) {
      obj[this.name] = {
        type: this.type,
        required: this.required,
        properties: this.properties
      };
      return obj;
    } else {
      obj[this.name] = {
        type: this.type,
        required: this.required,
      };
      return obj;
    }
  }


  toRAMLObject() {
    let object = {};
    let newObjectList = [];
    newObjectList.push(this);

    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.type === TypeEnum.object) {
          console.log('new file');
          newObjectList.push(this);
          value.toRAMLObject();
          console.log(value);

          object[value.name] = {
            type: '!include  ' + value.name,
            required: value.required
          };

          // console.log(stringify(parse(JSON.stringify(obj))));
        } else {
          object[value.name] = {
            type: '!include  ' + value.name,
            required: value.required
          };
        }
      });
    }
    newObjectList.forEach(value => {
      const file = new File([stringify(parse(JSON.stringify(value)))], value.name);
      saveAs(file, value.name + '.raml');
    });
    return object;

  }

  toExample() {
    const obj = {};
    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.properties != null) {
          obj[value.name] = value.toExample();
        } else {
          obj[value.name] = value.example;
        }
      });
    }
    return obj;
  }


  // toExample() {
  //   let obj = {};
  //   if (this.properties === null || this.properties === undefined) {
  //     obj[this.name] = this.example;
  //   } else {
  //     this.properties.forEach(value => {
  //       obj = value.toExample();
  //     });
  //   }
  //   return obj;
  // }
}
