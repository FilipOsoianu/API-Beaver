import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { AuthGuard } from './auth-guard.service';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { NbCustomRoleProvider } from './role.provider';

import { HttpRequest } from '@angular/common/http';
import { RoleGuard } from './role-guard.service';
import { environment } from '../../environments/environment';

export function filterInterceptorRequest(req: HttpRequest<any>) {
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
            key: 'token', // this parameter tells where to look for the token
          },
          baseEndpoint: environment.api_url,
          login: {
            endpoint: '/api/auth/local',
            method: 'post',
            redirect: {
              success: '/pages/dashboard',
              failure: '/',
            },

            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          logout: { endpoint: '', redirect: { success: '/auth/login', failure: '/auth/login' } },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0, // delayefore redirect after a successful login, while success message is shown to the user
          strategy: 'email', // strategy id key.
          showMessages: {
            // show/not show success/error messages
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
  ],
  declarations: [

  ],
  providers: [
    AuthGuard,
    RoleGuard,
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: filterInterceptorRequest,
    },
    { provide: NbRoleProvider, useClass: NbCustomRoleProvider },
  ],
})
export class NgxAuthModule {}
