import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbIconLibraries, NbMenuService} from '@nebular/theme';
import {NbMenuItem} from '@nebular/theme/components/menu/menu.service';
import {UserModel} from "./models/user.model";

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
    nbMenuService.navigateHome('home');
  }

  public ngOnInit(): void {
    this.menu = [
      {
        title: 'Spec',
        icon: 'settings-outline',
        data: {id: 'Spec'},
        link: '/specs',
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
