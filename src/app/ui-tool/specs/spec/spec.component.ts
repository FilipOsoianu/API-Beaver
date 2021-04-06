import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'ngx-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.specID = this.activatedRoute.snapshot.paramMap.get('id');
  }

  specID: any;

  ngOnInit(): void {
  }

}
