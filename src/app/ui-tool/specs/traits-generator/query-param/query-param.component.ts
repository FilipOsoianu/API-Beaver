import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEnum} from "../../../enums/type.enum";
import {RequiredEnum} from "../../../enums/required.enum";
import {HeaderModel} from "../../../models/header.model";
import {QueryParamsModel} from "../../../models/query-params.model";

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.scss']
})
export class QueryParamComponent implements OnInit {


  @Input() queryParam: QueryParamsModel;
  @Output() queryParamChange = new EventEmitter<QueryParamsModel>();
  @Input() specId: any;

  constructor() {
  }

  typeEnum = TypeEnum;
  requiredEnum = RequiredEnum;

  ngOnInit(): void {

  }

  public get getType(): typeof TypeEnum {
    return TypeEnum;
  }

  setType(type: TypeEnum): void {
    this.queryParam.type = type;
  }

  setRequired(required: RequiredEnum): void {
    this.queryParam.required = required !== RequiredEnum.false;
  }

  updateHeader(): void {
    this.queryParamChange.emit(this.queryParam);
  }



}
