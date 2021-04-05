import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NbAuthComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent} from '@nebular/auth';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {}
