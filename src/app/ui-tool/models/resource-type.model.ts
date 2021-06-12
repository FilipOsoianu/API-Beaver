import {MethodEnum} from "../enums/method.enum";
import {ResourceTypeMethodModel} from "./resource-type-method.model";

export class ResourceTypeModel {
  name: string;
  description: string;
  resourceTypeMethodModel: ResourceTypeMethodModel[];


  toJSON() {
    const myMap = new Map()
    const object = {};
    myMap.set('description', this.description)
    this.resourceTypeMethodModel.forEach(value => {
      myMap.set(value.method, value.toJSON());
    })
    myMap.forEach((value, key) => {
      var keys = key.split('.'),
        last = keys.pop();
      keys.reduce((r, a) => r[a] = r[a] || {}, object)[last] = value;
    });

    return object;
  }
}
