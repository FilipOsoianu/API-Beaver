import {Component, OnInit} from '@angular/core';
import {ResourceTypeModel} from "../../models/resource-type.model";
import {MethodEnum} from "../../enums/method.enum";
import {RequiredEnum} from "../../enums/required.enum";
import {ResourceTypeMethodModel} from "../../models/resource-type-method.model";
import {parse, stringify} from "yaml";
import {saveAs} from 'file-saver';
import {ResourceTypeService} from "./resource-type.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-resource-type',
  templateUrl: './resource-type.component.html',
  styleUrls: ['./resource-type.component.css']
})
export class ResourceTypeComponent implements OnInit {

  constructor(private resourceTypeService: ResourceTypeService, private activatedRoute: ActivatedRoute) {
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  specId: any;

  resourceType: ResourceTypeModel = new ResourceTypeModel();
  methodsEnum = MethodEnum;

  ngOnInit(): void {
    this.resourceType.resourceTypeMethodModel = [];
    this.resourceType.resourceTypeMethodModel.push(new ResourceTypeMethodModel());

  }

  setMethod(method: MethodEnum) {
    // this.resourceType.method = method;
  }

  update(event) {
    console.log(this.resourceType);
  }

  save(): void {
    console.log(this.resourceType.toJSON());
    const file = new File([stringify(parse(JSON.stringify(this.resourceType.toJSON())))], 'resourceType-' + this.resourceType.name + '.raml');
    saveAs(file, 'resourceType-' + this.resourceType.name + '.raml');


    this.resourceTypeService.saveObject(localStorage.getItem('user_id'), this.specId, file).subscribe(value1 => {
      console.log(value1);
    });

  }

  newResourceType(): void {
    this.resourceType.resourceTypeMethodModel.push(new ResourceTypeMethodModel());
  }

}
