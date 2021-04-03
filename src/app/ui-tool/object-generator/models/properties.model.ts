import {TypeEnum} from '../enums/type.enum';
import {parse} from 'yaml';
import {BodyGeneratorService} from "../body-generator/body-generator.service";

export class PropertiesModel {
  name: string;
  type: TypeEnum | string;
  required: boolean;
  example: string;
  loadFile: boolean;
  properties: PropertiesModel[];

  constructor(type?: TypeEnum | string, name?: string, required?: boolean,
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


  static toString(value) {
    return JSON.stringify(value);
  }

  static fromYaml(value) {
    return JSON.stringify(parse(value));
  }

  static getName(value) {
    return Object.keys(value);
  }

  static getValue(value): any {
    return Object.values(value)[0];
  }

  static fromJson(jsonString: string, bodyGeneratorService: BodyGeneratorService): PropertiesModel {
    let prop = new PropertiesModel();
    let json;
    if (JSON.parse(jsonString) != null) {
      json = JSON.parse(jsonString);
    } else {
      json = jsonString;
    }
    prop.name = this.getName(json)[0];
    const value = this.getValue(json);
    if (value != null && value.type != null) {
      if (value.type.includes('!include')) {
        prop.type = TypeEnum.object;
        prop.loadFile = true;
      } else {
        prop.type = value.type;
      }
      prop.required = value.required;
      if (prop.type === TypeEnum.object) {
        prop.properties = [];
        if (value.properties != null) {
          value.properties.forEach(property => {
            let tempProperty = this.fromJson(this.toString(property), bodyGeneratorService);
            if (tempProperty.loadFile) {
              bodyGeneratorService.downloadObject(tempProperty.name + '.raml').subscribe(value1 => {
                value1.text().then(value2 => {
                  tempProperty = PropertiesModel.fromJson(PropertiesModel.fromYaml(value2), bodyGeneratorService);
                  prop.properties.push(tempProperty);
                });
              });
            } else {
              prop.properties.push(tempProperty);
            }
          });
        }
      } else {
        prop.example = value.example;
      }
    }
    return prop;
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


  toRAMLObject(service: BodyGeneratorService) {
    const newObjectList = [];
    const propertyList = [];
    newObjectList.push(this);

    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach(value => {
        if (value.type === TypeEnum.object) {
          value.toRAMLObject(service);
          propertyList.push(new PropertiesModel('!include  ' + value.name, value.name, value.required)
          );
        } else {
          propertyList.push(value);
        }
      });
    }

    newObjectList.forEach(value => {
      const propertiesModel = new PropertiesModel();
      propertiesModel.name = this.name;
      propertiesModel.type = this.type;
      propertiesModel.properties = propertyList;
      service.toRaml(propertiesModel);

      // const file = new File([stringify(parse(JSON.stringify(propertiesModel.toJSON())))], value.name);
      // saveAs(file, value.name + '.raml');
    });

    return newObjectList;

  }

  toExample() {
    const obj = {};
    const object = {};
    if (this.properties !== null && this.properties !== undefined) {
      this.properties.forEach((value: PropertiesModel) => {
        if (value.type.includes('!include')) {
          obj[value.name] = value.type;
        } else if (value.properties !== null && value.type === TypeEnum.object) {
          obj[value.name] = this.toExample();
        } else {
          obj[value.name] = value.example;
        }
      });
    }
    object[this.name] = obj;
    return object;
  }

}
