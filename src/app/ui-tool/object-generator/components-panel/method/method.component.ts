import {Component, Input, OnInit} from '@angular/core';
import {MethodModel} from "../../models/method-model";

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class MethodComponent implements OnInit {
  @Input() method: MethodModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
