import {TypeEnum} from "../enums/type.enum";

export class HeaderModel {
  name: string;
  description: string;
  type: TypeEnum | any;
  required: boolean;
  example: string;

  constructor(name?: string, description?: string, type?: any, required?: boolean, example?: string) {
    if (name) {
      this.name = name;
    }
    if (description) {
      this.description = description;
    }
    if (type) {
      this.type = type;
    }
    if (required) {
      this.required = required;
    }
    if (example) {
      this.example = example;
    }
  }

  toJSON() {
    const obj = {};
    obj[this.name] = {
      type: this.type,
      required: this.required,
      example: this.example,
      description: this.description
    };

    return obj;
  }

  static getName(value) {
    return Object.keys(value);
  }

  static getValue(value): any {
    return Object.values(value)[0];
  }

  static fromJson(jsonString) {
    return new HeaderModel(this.getName(jsonString)[0], this.getValue(jsonString).description, this.getValue(jsonString).type, this.getValue(jsonString).required, this.getValue(jsonString).example);
  }

}
