import {Component, OnInit} from '@angular/core';
import {GenericBoxModel} from "../models/generic-box-model";

@Component({
  selector: 'app-components-panel',
  templateUrl: './components-panel.component.html',
  styleUrls: ['./components-panel.component.scss']
})
export class ComponentsPanelComponent implements OnInit {
  header: GenericBoxModel;
  queryParams: GenericBoxModel;
  uriParams: GenericBoxModel;
  body: GenericBoxModel;
  response: GenericBoxModel;
  elements: GenericBoxModel[] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.queryParams = new GenericBoxModel('Query Param', '#1b1464', '?');
    this.uriParams = new GenericBoxModel('URI Param', '#fbb03b', '{}');
    this.header = new GenericBoxModel('Header', '#22b573', 'H');
    this.body = new GenericBoxModel('Body', '#ed1c24', 'B');
    this.response = new GenericBoxModel('Response', '#0000ff', 'R');
    this.elements.push(this.queryParams);
    this.elements.push(this.uriParams);
    this.elements.push(this.header);
    this.elements.push(this.body);
    this.elements.push(this.response);
  }

}
