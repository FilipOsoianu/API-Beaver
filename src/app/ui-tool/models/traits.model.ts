import {BodyModel} from "./body.model";
import {HeaderModel} from "./header.model";
import {QueryParamsModel} from "./query-params.model";
import {ResponseModel} from "./response.model";

export class TraitsModel {
  name: string;
  response: ResponseModel;
  header: HeaderModel[];
  queryParams: QueryParamsModel[];
  body: BodyModel[];
}
