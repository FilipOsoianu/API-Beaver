import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-response-generator',
  templateUrl: './response-generator.component.html',
  styleUrls: ['./response-generator.component.css']
})
export class ResponseGeneratorComponent implements OnInit {

  constructor() { }
  @Input() specId: any;

  ngOnInit(): void {
  }

}
