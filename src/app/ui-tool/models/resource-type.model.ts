import {MethodEnum} from "../enums/method.enum";
import {ResourceTypeMethodModel} from "./resource-type-method.model";

export class ResourceTypeModel {
  name: string;
  description: string;
  resourceTypeMethodModel: ResourceTypeMethodModel[];
}
