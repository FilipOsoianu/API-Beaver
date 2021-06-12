import {Component, Input, OnInit} from '@angular/core';
import {SchemaModel} from "../../models/schema.model";
import {SchemaService} from "./schema.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
  @Input() specId: any;

  constructor(private schemaService: SchemaService, private activatedRoute: ActivatedRoute) {
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  schema: SchemaModel = new SchemaModel();
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
