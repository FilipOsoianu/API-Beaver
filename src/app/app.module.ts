import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbCardModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {MethodComponent} from './pannel/method/method.component';
import {MethodsBoxComponent} from './pannel/methods-box/methods-box.component';
import {GenericBoxComponent} from './pannel/generic-box/generic-box.component';
import {ComponentsPanelComponent} from './pannel/components-panel/components-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MethodComponent,
    MethodsBoxComponent,
    GenericBoxComponent,
    ComponentsPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
