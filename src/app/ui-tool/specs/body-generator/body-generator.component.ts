import {Component, Input, OnInit} from '@angular/core';

import {parse, stringify} from 'yaml';
import {saveAs} from 'file-saver';
import {BodyGeneratorService} from './body-generator.service';
import {PropertiesModel} from "./models/properties.model";
import {TypeEnum} from "./enums/type.enum";

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {

  object: PropertiesModel;
  @Input() specId: any;


  constructor(private bodyGeneratorService: BodyGeneratorService) {
    this.object = new PropertiesModel(TypeEnum.object);
    this.object.specId = this.specId;
    this.object.properties.push(new PropertiesModel());
  }

  ngOnInit() {
    this.bodyGeneratorService.ramlProperty.subscribe((value: PropertiesModel) => {
      if (value !== null) {
        const file = new File([stringify(parse(JSON.stringify(value.toJSON())))], value.name + '.raml');
        saveAs(file, value.name + '.raml');
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

  save() {
    // this.object.toRAMLObject(this.bodyGeneratorService);
    // this.bodyGeneratorService.downloadObject('jora.raml').subscribe(value => {
    //   value.text().then(value => {
    //     this.object = PropertiesModel.fromJson(PropertiesModel.fromYaml(value));
    //   });
    // });


    // console.log(JSON.stringify(this.object.toExample()));
    this.object.toRAMLObject(this.bodyGeneratorService);
  }

}
