import {Component, OnChanges, OnInit} from '@angular/core';
import {TypeEnum} from '../../enums/type.enum';
import {RequiredEnum} from '../../enums/required.enum';

@Component({
  selector: 'app-body-generator',
  templateUrl: './body-generator.component.html',
  styleUrls: ['./body-generator.component.scss']
})
export class BodyGeneratorComponent implements OnInit {

  required: boolean;
  type: object;

  typeEnum = TypeEnum;
  requiredEnum = RequiredEnum;

  constructor() {
  }

  ngOnInit() {
  }



  selectType(event) {
    console.log(event);
  }


  selectRequired(event) {
    console.log(event);
  }
}
