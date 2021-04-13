import {TypeEnum} from "../enums/type.enum";
import {RequiredEnum} from "../enums/required.enum";

export class HeaderModel {
  name: string;
  description: string;
  type: TypeEnum | any;
  required: boolean;
  example: string;
}
