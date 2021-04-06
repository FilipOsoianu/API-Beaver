import {Component, OnInit} from '@angular/core';
import {MethodModel} from "../../../models/method-model";

@Component({
  selector: 'app-methods-box',
  templateUrl: './methods-box.component.html',
  styleUrls: ['./methods-box.component.scss']
})
export class MethodsBoxComponent implements OnInit {
  getMethod: MethodModel;
  postMethod: MethodModel;
  putMethod: MethodModel;
  deleteMethod: MethodModel;
  patchMethod: MethodModel;
  headMethod: MethodModel;
  methods: MethodModel[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.getMethod = new MethodModel('GET', '#338a3e');
    this.postMethod = new MethodModel('POST', '#c77800');
    this.deleteMethod = new MethodModel('DELETE', '#b61827');
    this.putMethod = new MethodModel('PUT', '#0077c2');
    this.patchMethod = new MethodModel('PATCH', '#666666');
    this.headMethod = new MethodModel('HEAD', '#4d4d4d');
    this.methods.push(this.getMethod);
    this.methods.push(this.putMethod);
    this.methods.push(this.postMethod);
    this.methods.push(this.deleteMethod);
    this.methods.push(this.patchMethod);
    this.methods.push(this.headMethod);
  }

}
