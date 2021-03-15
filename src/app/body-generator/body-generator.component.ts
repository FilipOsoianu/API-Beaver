import {Component, OnInit} from '@angular/core';
import {PropertiesModel} from '../../models/properties.model';

import {parse, stringify} from 'yaml';
import {TypeEnum} from '../../enums/type.enum';

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {
  // objectTypeModel: ObjectTypeModel;

  object: PropertiesModel;

  constructor() {
    this.object = new PropertiesModel(TypeEnum.object);
    this.object.properties.push(new PropertiesModel());
    // this.objectTypeModel.properties = [];
  }

  ngOnInit() {
  }



  updateProperty(): void {

  }




  save() {
    // const file = new File([stringify(parse(JSON.stringify(this.objectTypeModel)))], 'jora.raml');
    // saveAs(file, 'hello world.raml');
    console.log(stringify(parse(JSON.stringify(this.object.toJSON()))));
    console.log(JSON.stringify(this.object.toExample()));
    // this.bodyGeneratorService.saveObject(this.objectTypeModel);
  }

}
