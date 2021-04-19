import {Component, Input, OnInit} from '@angular/core';
import {TraitsModel} from "../../models/traits.model";
import {HeaderModel} from "../../models/header.model";
import {QueryParamsModel} from "../../models/query-params.model";
import {RequiredEnum} from "../../enums/required.enum";
import {STATUS_CODES} from "../../enums/status-code.const";
import {parse, stringify} from "yaml";
import {TraitsGeneratorService} from "./traits-generator.service";

@Component({
  selector: 'ngx-traits-generator',
  templateUrl: './traits-generator.component.html',
  styleUrls: ['./traits-generator.component.css']
})
export class TraitsGeneratorComponent implements OnInit {

  constructor(private traitsGeneratorService: TraitsGeneratorService) {
  }

  @Input() specId: any;

  trait: TraitsModel = new TraitsModel();
  requiredEnum = RequiredEnum;
  statusCode = STATUS_CODES;
  filesName: any;

  ngOnInit(): void {
  }

  updateHeader(event, index): void {
    this.trait.header[index] = event;
    console.log(this.trait)
  }


  updateQuery(event, index): void {
    this.trait.queryParams[index] = event;
  }


  addHeader(): void {
    if (this.trait.header) {
      this.trait.header.push(new HeaderModel());
    } else {
      this.trait.header = [new HeaderModel()];
    }
  }

  setResponse(required: RequiredEnum): void {
    this.trait.response = required !== RequiredEnum.false;
  }

  setStatusCode(statusCode: any): void {
    this.trait.statusCode = STATUS_CODES[statusCode];
    console.log(this.trait.statusCode);
  }


  addQueryParams(): void {
    if (this.trait.queryParams) {
      this.trait.queryParams.push(new QueryParamsModel());
    } else {
      this.trait.queryParams = [new QueryParamsModel()];
    }
  }


  loadFileNames() {
    this.traitsGeneratorService.loadFilesList(localStorage.getItem('user_id'), this.specId).subscribe(value => {
      this.filesName = [];
      this.filesName = this.filesName.concat(value);
    });
  }

  selectFile(event) {
    this.trait.body = event;
  }

  save(): void {
    console.log(stringify(parse(JSON.stringify(this.trait.toJSON()))));
  }


}
