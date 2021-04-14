import {BodyModel} from "./body.model";
import {HeaderModel} from "./header.model";
import {QueryParamsModel} from "./query-params.model";

export class TraitsModel {
  name: string;
  response: boolean;
  statusCode: string;
  header: HeaderModel[];
  queryParams: QueryParamsModel[];
  body: BodyModel[];


  toJSON() {
    let obj = {};
    let responseObj = {};
    let finalObj = {};
    const headers = [];
    const queryParams = [];
    if (this.header != null &&
      this.header.length > 0) {
      this.header.forEach(value => {
        headers.push(value.toJSON());
      })
    }

    if (this.queryParams != null &&
      this.queryParams.length > 0) {
      this.queryParams.forEach(value => {
        queryParams.push(value.toJSON());
      })
    }
    if (headers.length > 0) {
      obj['headers'] = headers;
    }
    if (!this.response) {
      if (queryParams.length > 0) {
        obj['queryParams'] = queryParams;
      }
    }
    // if (this.body !== null) {
    //   obj['body'] = this.body;
    // }

    if (this.response) {
      responseObj[this.statusCode] = obj;
      finalObj[this.name] = {
        responses: responseObj
      }
    } else {
      finalObj[this.name] = obj;
    }
    return finalObj;
  }

}
