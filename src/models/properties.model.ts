import {TypeEnum} from '../enums/type.enum';
import {BodyGeneratorService} from '../app/body-generator/body-generator.service';

export class PropertiesModel {
  name: string;
  type: TypeEnum;
  required: boolean;
  example: string;
  properties: PropertiesModel[];

  constructor(type?: TypeEnum, name?: string, required?: boolean,
              example?: string,
              properties?: PropertiesModel[]) {
    if (type !== null) {
      this.type = type;
      if (type === TypeEnum.object) {
        this.properties = [];
      }
    }
    if (name !== null) {
      this.name = name;
    }

    if (required !== null) {
      this.required = required;
    }
    if (example !== null) {
      this.example = example;
    }

    if (properties) {
      this.properties = properties;
    }
  }

  toYAML() {
    const obj = {};

    if (this.properties != null &&
      this.properties.length >
      0) {
      obj[this.name] =
        {
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

  toJSON() {
    const obj = {};
    if (this.properties != null &&
      this.properties.length > 0) {
      obj[this.name] =
        {
          type: this.type,
          required: this.required,
          properties: this.properties,
        };
      return obj;
    } else {
      obj[this.name] = {
        type: this.type,
        required: this.required,
        example: this.example
      };

      return obj;
    }
  }

  fromJSON(json: {}) {
    console.log(json);
  }

  toRAMLObject(service: BodyGeneratorService) {
    const object = {};
    const newObjectList = [];
    const propertyList = [];
    newObjectList.push(this);

    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.type === TypeEnum.object) {
          value.toRAMLObject(service);
          object[value.name] =
            {
              type: '!include  ' + value.name,
              required: value.required,
              example: value.example
            };
          propertyList.push(object);
        } else {
          propertyList.push(value.toJSON());
        }
      });
    }

    newObjectList.forEach(value => {
      const propertiesModel = new PropertiesModel();
      propertiesModel.name = this.name;
      propertiesModel.type = this.type;
      propertiesModel.properties = propertyList;
      service.load(propertiesModel);

      // const file = new File([stringify(parse(JSON.stringify(propertiesModel.toJSON())))], value.name);
      // saveAs(file, value.name + '.raml');
    });

    return newObjectList;

  }

  toExample() {
    let obj = {};
    const object = {};

    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.properties !== null && value.type === TypeEnum.object) {
          obj[this.name] = this.toExample();
        } else {
          console.log(value);
          console.log(value.example);
          obj[value.name] = value.example
          // console.log(obj);
        }
      });
    }
    object[this.name] = obj;
    return object;
  }

}
