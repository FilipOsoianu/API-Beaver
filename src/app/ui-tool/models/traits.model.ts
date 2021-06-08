import {HeaderModel} from "./header.model";
import {QueryParamsModel} from "./query-params.model";
import {PropertiesModel} from "./properties.model";
import {parse} from "yaml";

export class TraitsModel {
  name: string;
  response: boolean;
  statusCode: number;
  header: HeaderModel[];
  queryParams: QueryParamsModel[];
  body: PropertiesModel;


  toJSON() {
    let obj = {};
    let responseObj = {};
    let finalObj = {};
    const headers = [];
    const queryParams = [];
    if (this.header &&
      this.header.length > 0) {
      this.header.forEach(value => {
        headers.push(value.toJSON());
      })
    }

    if (this.queryParams &&
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
    if (this.body) {
      obj['body'] = {
        type: this.body.name
      };
    }

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

  static fromYaml(value) {
    return JSON.stringify(parse(value));
  }

  static getName(value) {
    return Object.keys(value);
  }

  static getValue(value): any {
    return Object.values(value)[0];
  }


  static fromJson(jsonString) {
    const model = new TraitsModel();
    let json;
    if (JSON.parse(jsonString) != null) {
      json = JSON.parse(jsonString);
    } else {
      json = jsonString;
    }

    if (json) {
      if (this.getValue(json).headers) {
        model.header = [];
        this.getValue(json).headers.forEach((value) => {
    model.header.push(HeaderModel.fromJson(value));

        });
      }
    }
    return model;
  }


}
