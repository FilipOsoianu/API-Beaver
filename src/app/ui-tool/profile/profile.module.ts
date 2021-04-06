import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbSidebarModule} from '@nebular/theme';
import {ProfileComponent} from "./profile.component";
import {ProfileRoutingModule} from "./profile-routing.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ProfileRoutingModule

  ],
  providers: [ProfileComponent],
  exports: [

  ],
})
export class ProfileModule {
}
