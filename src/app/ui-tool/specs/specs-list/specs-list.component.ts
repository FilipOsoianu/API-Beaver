import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SpecsService} from "../specs.service";
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {NbDialogService} from "@nebular/theme";
import {AddSpecComponent} from "../add-spec/add-spec.component";
import {SpecModel} from "../../models/spec.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-specs-list',
  templateUrl: './specs-list.component.html',
  styleUrls: ['./specs-list.component.css']
})
export class SpecsListComponent implements OnInit {


  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      username: {
        title: 'File #',
        filter: false
      },
    }
  };
  data: SpecModel[] = [];

  source: LocalDataSource;
  userId: any;

  constructor(private specsService: SpecsService, private dialogService: NbDialogService, private router: Router, private route: ActivatedRoute,
  ) {
    this.userId = localStorage.getItem('user_id');
    this.source = new LocalDataSource();

    this.specsService.getSpecs(this.userId).toPromise().then((data) => {
      this.source.load(data);
    });


  }

  ngOnInit(): void {
  }


  openSpec(event) {
    this.router.navigate([event.data.id], {relativeTo: this.route});
    console.log(event)
  }

  addSpec(): void {
    this.dialogService.open(AddSpecComponent)
      .onClose.subscribe(value => {
      this.specsService.createSpec(this.userId, new SpecModel(value)).subscribe(value1 => {
        console.log(value1);
      });
    });
  }

}
