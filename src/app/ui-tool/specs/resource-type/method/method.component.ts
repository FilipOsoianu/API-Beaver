import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEnum} from "../../../enums/type.enum";
import {RequiredEnum} from "../../../enums/required.enum";
import {HeaderModel} from "../../../models/header.model";
import {MethodEnum} from "../../../enums/method.enum";
import {ResourceTypeMethodModel} from "../../../models/resource-type-method.model";
import {TraitsModel} from "../../../models/traits.model";
import {ResourceTypeService} from "../resource-type.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'resource-type-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class MethodComponent implements OnInit {


  @Input() resourceTypeMethodModel: ResourceTypeMethodModel;
  @Output() resourceTypeMethodModelChange = new EventEmitter<ResourceTypeMethodModel>();
  @Input() specId: any;

  constructor(private resourceTypeService: ResourceTypeService, private activatedRoute: ActivatedRoute) {
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  requiredEnum = RequiredEnum;
  methodsEnum = MethodEnum;
  filesName: any;

  ngOnInit(): void {
    this.resourceTypeMethodModel.is = [];
  }

  public get getType(): typeof TypeEnum {
    return TypeEnum;
  }

  setMethod(method): void {
    this.resourceTypeMethodModel.method = MethodEnum[method];
    this.updateResourceType();
  }

  setTrait(any: string): void {
    any = any.substring(0, any.indexOf('.'));
    const index = this.resourceTypeMethodModel.is.indexOf(any, 0);
    if (index > -1) {
      this.resourceTypeMethodModel.is.splice(index, 1);
    } else {
      this.resourceTypeMethodModel.is.push(any);
    }
    this.updateResourceType();
  }


  updateResourceType(): void {
    this.resourceTypeMethodModelChange.emit(this.resourceTypeMethodModel);
  }

  loadFileNames() {
    this.resourceTypeService.loadFilesList(localStorage.getItem('user_id'), this.specId).subscribe(value => {
      this.filesName = [];
      this.filesName = this.filesName.concat(value);
    });
  }


}
