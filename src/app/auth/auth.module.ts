import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgxAuthRoutingModule} from './auth-routing.module';
import {
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbAuthJWTToken,
  NbAuthModule,
  NbAuthToken,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule} from '@nebular/theme';
import {AuthGuard} from './auth-guard.service';
import {NbRoleProvider, NbSecurityModule} from '@nebular/security';

import {HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ThemeModule} from "../@theme/theme.module";
import {ChangePasswordComponent} from "./change-password/change-password.component";

export function filterInterceptorRequest(req: HttpRequest<any>) {
  console.log(req);
  return [].some(url => req.url.includes(url));
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token', // this parameter tells where to look for the token
          },
          baseEndpoint: environment.api_url,
          login: {
            endpoint: '/users/signin',
            method: 'post',
            redirect: {
              success: '/',
              failure: '/auth/login',
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          register: {
            endpoint: '/users',
            method: 'post',
            redirect: {
              success: '/auth/login',
              failure: '/auth/register',
            },
            requireValidToken: false,
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
          },
          requestPass:
            {
              endpoint: '/users',
              method: 'patch',
              redirect: {
                success: '/',
                failure: '/auth/changePassword',
              },
              defaultErrors: ['please try again.'],
              defaultMessages: ['You have been successfully logged in.'],
            },
          logout: {endpoint: '', redirect: {success: '/auth/login', failure: '/auth/login'}},
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delayefore redirect after a successful login, while success message is shown to the user
          strategy: 'email', // strategy id key.
          showMessages: {
              success: true,
            error: true,
          },
        },
        register: {
          redirectDelay: 1000, // delayefore redirect after a successful login, while success message is shown to the user
          strategy: 'email', // strategy id key.
          showMessages: {
            success: true,
            error: true,
          },
        },
        logout: {
          redirectDelay: 500,
          strategy: 'email',
        },
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        admin: {
          view: '*',
          create: '*',
          remove: '*',
        },
      },
    }),
    ThemeModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  providers: [
    AuthGuard,
  ],
})
export class NgxAuthModule {
}

