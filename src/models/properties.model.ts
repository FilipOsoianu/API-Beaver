import {TypeEnum} from '../enums/type.enum';
import {RequiredEnum} from '../enums/required.enum';

export class PropertiesModel {
  name: string;
  type: TypeEnum;
  required: RequiredEnum;
  example: string;
  properties: PropertiesModel[];

  constructor() {
  }

}

