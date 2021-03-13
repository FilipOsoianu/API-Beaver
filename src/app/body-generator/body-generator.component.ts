import {Component, OnChanges, OnInit} from '@angular/core';
import {PropertiesModel} from '../../models/properties.model';

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {

  properties: PropertiesModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.properties.push(new PropertiesModel());
    console.log(this.properties);
  }

  generateNewProperty() {
    this.properties.push(new PropertiesModel());
  }

  updateProperty(property: PropertiesModel): void {
    // const index = this.properties.indexOf(this.properties.find((value => value.name === property.name)));
    // this.properties[index] = property;
    console.log(this.properties);
  }


  deletePropriety(property: PropertiesModel) {
    const index = this.properties.indexOf(property, 0);
    if (index > -1) {
      this.properties.splice(index, 1);
    }
  }

}
