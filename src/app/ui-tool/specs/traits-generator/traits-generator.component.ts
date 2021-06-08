import {Component, Input, OnInit} from '@angular/core';
import {TraitsModel} from "../../models/traits.model";
import {HeaderModel} from "../../models/header.model";
import {QueryParamsModel} from "../../models/query-params.model";
import {RequiredEnum} from "../../enums/required.enum";
import {STATUS_CODES} from "../../enums/status-code.const";
import {parse, stringify} from "yaml";
import {TraitsGeneratorService} from "./traits-generator.service";
import {ActivatedRoute} from "@angular/router";
import {saveAs} from 'file-saver';
import {PropertiesModel} from "../../models/properties.model";

@Component({
  selector: 'ngx-traits-generator',
  templateUrl: './traits-generator.component.html',
  styleUrls: ['./traits-generator.component.css']
})
export class TraitsGeneratorComponent implements OnInit {

  constructor(private traitsGeneratorService: TraitsGeneratorService, private activatedRoute: ActivatedRoute) {
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  specId: any;
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

  loadFile(traitsModel: TraitsModel, fileName: string) {
    this.traitsGeneratorService.downloadObject(localStorage.getItem('user_id'), this.specId, fileName).subscribe(value => {
      value.text().then(value1 => {
        this.trait = TraitsModel.fromJson(TraitsModel.fromYaml(value1));
        // this.object = PropertiesModel.fromJson(PropertiesModel.fromYaml(value1), this.specId, this.bodyGeneratorService);
      });
    });
  }

  selectFile(event) {
    this.trait.body = event;
  }

  save(): void {
    const file = new File([stringify(parse(JSON.stringify(this.trait.toJSON())))], this.trait.name + 'Trait.raml');
    saveAs(file, this.trait.name + 'Trait.raml');

    this.traitsGeneratorService.saveObject(localStorage.getItem('user_id'), this.specId, file).subscribe(value1 => {
      console.log(value1);
    });

  }


}
