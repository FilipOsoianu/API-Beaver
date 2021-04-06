import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbIconLibraries, NbMenuService} from '@nebular/theme';
import {NbMenuItem} from '@nebular/theme/components/menu/menu.service';
import {UserModel} from "./profile/models/user.model";

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
        title: 'UI tool',
        icon: 'settings-outline',
        children: [
          {
            data: {id: 'ObjectGenerator'},
            title: 'Object Generator',
            link: '/objectGenerator',
          },
        ],
      },
      {
        title: 'Spec',
        icon: 'settings-outline',
        children: [
          {
            data: {id: 'Spec'},
            title: 'Specs',
            link: '/specs',
          },
        ],
      },
      {
        title: 'User',
        icon: 'person-outline',
        children: [
          {
            title: 'Profile',
            data: {id: 'Profile'},
            link: '/profile',
          },
          {
            title: 'Change Password',
            link: '/auth/changePassword',
          },
          {
            title: 'Logout',
            link: '/auth/logout',
          },
        ],
      },];
  }
}
