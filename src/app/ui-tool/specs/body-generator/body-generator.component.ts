import {Component, Input, OnInit} from '@angular/core';

import {parse, stringify} from 'yaml';
import {saveAs} from 'file-saver';
import {BodyGeneratorService} from './body-generator.service';
import {PropertiesModel} from "../../models/properties.model";
import {TypeEnum} from "../../enums/type.enum";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {

  object: PropertiesModel;


  specId: any;
  filesName: string[] = [];


  constructor(private bodyGeneratorService: BodyGeneratorService, private activatedRoute: ActivatedRoute) {
    this.object = new PropertiesModel(TypeEnum.object);
    this.specId = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {

    this.bodyGeneratorService.ramlProperty.subscribe((value: PropertiesModel) => {
      if (value !== null) {

        const object = '#%RAML 1.0 DataType \n' + stringify(parse(JSON.stringify(value.toJSON())));

        const file = new File([object], 'type-' + value.name + '.raml');
        saveAs(file, 'type-' + value.name + '.raml');

        this.bodyGeneratorService.saveObject(localStorage.getItem('user_id'), this.specId, file).subscribe(value1 => {
          console.log(value1);
        });
      }
    });

    this.bodyGeneratorService.toPropertyObjects.subscribe((value: PropertiesModel) => {
      if (value !== null) {
        const object = {};
        object[value.name] = value.toExample();
        const example = '#%RAML 1.0 NamedExample \n' + stringify(parse(JSON.stringify(object)));
        const file = new File([example], 'example-' + value.name + '.raml');
        saveAs(file, 'example-' + value.name + '.raml');

        this.bodyGeneratorService.saveObject(localStorage.getItem('user_id'), this.specId, file).subscribe(value1 => {
          console.log(value1);
        });
      }
    });

    this.bodyGeneratorService.newProperty.subscribe((value: PropertiesModel) => {
      if (value !== null) {
        this.object = value;
      }
    });
  }


  updateProperty(property: PropertiesModel): void {
  }

  loadFile(propertyModel: PropertiesModel, fileName: string) {
    this.bodyGeneratorService.downloadObject(localStorage.getItem('user_id'), this.specId, fileName).subscribe(value => {
      value.text().then(value1 => {
        this.object = PropertiesModel.fromJson(PropertiesModel.fromYaml(value1), this.specId, this.bodyGeneratorService);
      });
    });
  }

  loadFileNames() {
    this.bodyGeneratorService.loadFilesList(localStorage.getItem('user_id'), this.specId).subscribe(value => {
      this.filesName = [];
      this.filesName = this.filesName.concat(value);
    });
  }

  save() {

    this.object.toRAMLObject(this.bodyGeneratorService);
    this.object.toObjects(this.bodyGeneratorService);
  }

}
