import {Component, Input, OnInit} from '@angular/core';
import {GenericBoxModel} from "../../../models/generic-box-model";

@Component({
  selector: 'app-generic-box',
  templateUrl: './generic-box.component.html',
  styleUrls: ['./generic-box.component.scss']
})
export class GenericBoxComponent implements OnInit {
  @Input() method: GenericBoxModel;

  constructor() { }

  ngOnInit(): void {
  }

}
