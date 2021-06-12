import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEnum} from "../../../enums/type.enum";
import {RequiredEnum} from "../../../enums/required.enum";
import {HeaderModel} from "../../../models/header.model";
import {SchemaService} from "../schema.service";
import {ActivatedRoute} from "@angular/router";
import {SchemaModel} from "../../../models/schema.model";

@Component({
  selector: 'schema-object',
  templateUrl: './schema-object.component.html',
  styleUrls: ['./schema-object.component.scss']
})
export class SchemaObjectComponent implements OnInit {

  @Input() specId: any;
  @Input() schema: SchemaModel;

  constructor(private schemaService: SchemaService, private activatedRoute: ActivatedRoute) {
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  filesName

  ngOnInit(): void {
    this.schema.children = [];
  }

  loadFileNames() {
    this.schemaService.loadFilesList(localStorage.getItem('user_id'), this.specId).subscribe(value => {
      this.filesName = [];
      this.filesName = this.filesName.concat(value);
    });
  }

  setResourceType(resourceType: string) {
    this.schema.resourceType = resourceType;
  }

  addChildPath() {
    this.schema.children.push(new SchemaModel());
  }
}
