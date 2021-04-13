import {Component, Input, OnInit} from '@angular/core';
import {TraitsModel} from "../../models/traits.model";
import {HeaderModel} from "../../models/header.model";
import {QueryParamsModel} from "../../models/query-params.model";
import {BodyModel} from "../../models/body.model";

@Component({
  selector: 'ngx-traits-generator',
  templateUrl: './traits-generator.component.html',
  styleUrls: ['./traits-generator.component.css']
})
export class TraitsGeneratorComponent implements OnInit {

  constructor() {
  }

  @Input() specId: any;

  trait: TraitsModel = new TraitsModel();

  ngOnInit(): void {
  }

  updateTrait(event): void {
    console.log(event);
  }


  addHeader(): void {
    if (this.trait.header) {
      this.trait.header.push(new HeaderModel());
    } else {
      this.trait.header = [new HeaderModel()];
    }
  }

  addQueryParams(): void {
    if (this.trait.queryParams) {
      this.trait.queryParams.push(new QueryParamsModel());
    } else {
      this.trait.queryParams = [new QueryParamsModel()];
    }
  }

  addBody(): void {
    this.trait.body = [new BodyModel()];
  }

}
