import {Component, OnInit} from '@angular/core';
import {PropertiesModel} from '../../models/properties.model';

import {parse, stringify} from 'yaml';
import {TypeEnum} from '../../enums/type.enum';
import {saveAs} from 'file-saver';
import {BodyGeneratorService} from './body-generator.service';

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {

  object: PropertiesModel;

  constructor(private bodyGeneratorService: BodyGeneratorService) {
    this.object = new PropertiesModel(TypeEnum.object);
    this.object.properties.push(new PropertiesModel());
  }

  ngOnInit() {
    this.bodyGeneratorService.myData.subscribe((value: PropertiesModel) => {
      if (value !== null) {
        // console.log(value);
        // console.log('dadada');
        // value.toExample();
        const file = new File([stringify(parse(JSON.stringify(value.toJSON())))], value.name + '.raml');
        saveAs(file, value.name + '.raml');
        // this.bodyGeneratorService.saveObject(file).subscribe(value1 => {
        //   console.log(value1);
        // });
        // console.log('dada');
        // console.log(value);.

      }
    });
  }


  updateProperty(): void {

  }

  save() {
    this.object.toRAMLObject(this.bodyGeneratorService);
    // console.log(JSON.stringify(this.object.toExample()));
    // console.log(this.object);
  }

}
