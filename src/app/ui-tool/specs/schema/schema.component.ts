import {Component, Input, OnInit} from '@angular/core';
import {SchemaModel} from "../../models/schema.model";
import {SchemaService} from "./schema.service";
import {ActivatedRoute} from "@angular/router";
import {parse, stringify} from "yaml";
import {saveAs} from 'file-saver';

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


  save() {
    const file = new File([stringify(parse(JSON.stringify({[this.schema.path]: this.schema.toJSON()})))], 'schema-' + this.schema.path + '.raml');
    saveAs(file, 'schema-' + this.schema.path + '.raml');
    this.schemaService.saveObject(localStorage.getItem('user_id'), this.specId, file).subscribe(value1 => {
      console.log(value1);
    });
  }


}
