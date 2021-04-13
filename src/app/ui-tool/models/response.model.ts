import {BodyModel} from "./body.model";
import {HeaderModel} from "./header.model";
import {QueryParamsModel} from "./query-params.model";

export class ResponseModel {
  description: string;
  statusCode: string;
  body: BodyModel[];
  header: HeaderModel[];
  queryParams: QueryParamsModel[];
}
