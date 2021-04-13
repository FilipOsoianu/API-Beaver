import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEnum} from "../../../enums/type.enum";
import {RequiredEnum} from "../../../enums/required.enum";
import {HeaderModel} from "../../../models/header.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() header: HeaderModel;
  @Output() headerChange = new EventEmitter<HeaderModel>();
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
    this.header.type = type;
  }

  setRequired(required: RequiredEnum): void {
    this.header.required = required !== RequiredEnum.false;
  }

  updateHeader(): void {
    this.headerChange.emit(this.header);
  }

}
