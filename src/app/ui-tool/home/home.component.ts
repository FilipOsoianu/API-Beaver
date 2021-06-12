import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {HomeService} from "./home.service";

@Component({
  selector: 'ngx-home-table',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source: LocalDataSource;
  userId: any;

  settings = {
    hideSubHeader: true,
    mode: 'inline',
    actions: {
      add: false,
      delete: false,
      edit: false,
      position: 'right',
    },
    columns: {
      name: {
        title: 'Name',
        filter: false
      },
    }
  };

  constructor(private specsService: HomeService,
  ) {
    this.source = new LocalDataSource();

    this.specsService.getAllPublicSpecs().toPromise().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }


}
