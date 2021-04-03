import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbIconLibraries, NbMenuService} from '@nebular/theme';
import {NbMenuItem} from '@nebular/theme/components/menu/menu.service';
import {UserModel} from "./object-generator/models/user.model";

@Component({
  selector: 'ngx-dashboard-layout',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class UiToolLayoutComponent implements OnInit {

  public menu: NbMenuItem[];
  user: UserModel;

  constructor(private nbMenuService: NbMenuService,
              private iconLibraries: NbIconLibraries,
              private http: HttpClient,
  ) {

  }

  public ngOnInit(): void {
    this.menu = [
      {
        title: 'Object Generator',
        data: {id: 'ObjectGenerator'},
        link:'/objectGenerator',
        icon: 'person-outline',
      },
      {
        title: 'User',
        group: true,
      },
      {
        title: 'this.user.email',
        icon: 'person-outline',
        children: [
          {
            title: 'Setări cont',
            data: {id: 'Profile'},
            link: '/profile',
          },
          {
            title: 'Deconectare',
            link: '/auth/logout',
          },
        ],
      },];
  }
}
