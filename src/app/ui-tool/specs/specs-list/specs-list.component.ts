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
    mode: 'inline',
    edit: {editButtonContent: '<div class="edit-button">Edit </div>', confirmSave: true},

    actions: {
      position: 'right',
      custom: [
        {
          name: 'download',
          title: '<div class="edit-button">Download</div>'
        }
      ],
      add: false,
      delete: false
    },
    columns: {
      name: {
        title: 'Name',
        filter: false
      },
      isPublic: {
        title: 'Is public',
        filter: false
      }
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

  download(event) {
    if (event.action === 'download') {
      this.specsService.downloadZip(this.userId, event.data.id).subscribe(value => {
        const blob = new Blob([value], {
          type: 'application/zip'
        });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    }
  }

  openSpec(event) {
    this.router.navigate([event.data.id], {relativeTo: this.route});
    console.log(event)
  }

  edit(event) {
    const newSpec = {name: event.newData.name, isPublic: event.newData.isPublic};
    this.specsService.updateSpec(this.userId, event.data.id, newSpec).subscribe(value => {
      console.log(value);
    });
    setTimeout(() => {
      this.source.refresh();
      this.specsService.getSpecs(this.userId).toPromise().then((data) => {
        this.source.load(data);
      });
    }, 2000);
  }

  addSpec(): void {
    this.dialogService.open(AddSpecComponent)
      .onClose.subscribe(value => {
      if (value) {
        this.specsService.createSpec(this.userId, new SpecModel(value)).subscribe(value1 => {
          console.log(value1);
        });
      }
    });
  }

}
