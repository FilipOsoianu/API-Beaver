import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAuthModule} from '@nebular/auth';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LayoutService} from './utils';
import {NgxAuthModule} from '../auth/auth.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

export const NB_CORE_PROVIDERS = [LayoutService];

@NgModule({
  imports: [CommonModule, NgxAuthModule],
  exports: [NgxAuthModule, NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS,],
    };
  }
}
