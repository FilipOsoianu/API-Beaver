import {Component, OnInit} from '@angular/core';
import {ResourceTypeModel} from "../../models/resource-type.model";
import {MethodEnum} from "../../enums/method.enum";
import {RequiredEnum} from "../../enums/required.enum";

@Component({
  selector: 'ngx-resource-type',
  templateUrl: './resource-type.component.html',
  styleUrls: ['./resource-type.component.css']
})
export class ResourceTypeComponent implements OnInit {

  constructor() {
  }

  resourceType: ResourceTypeModel = new ResourceTypeModel();
  methodsEnum = MethodEnum;

  ngOnInit(): void {
  }

  setMethod(method: MethodEnum) {
    // this.resourceType.method = method;
  }

  save(): void {

  }

  newResourceType(): void {

  }

}
