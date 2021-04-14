import {TypeEnum} from "../enums/type.enum";

export class QueryParamsModel {
  name: string;
  description: string;
  type: TypeEnum | any;
  required: boolean;
  example: string;

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
}
