import {MethodEnum} from "../enums/method.enum";

export class ResourceTypeMethodModel {
  description: string;
  method: MethodEnum;
  is: any[];

  toJSON() {
    const obj = {
      description: this.description,
      is: '[' + this.is + ']'
    }
    return obj;
  }
}
