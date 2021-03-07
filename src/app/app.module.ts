import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsPanelModule} from './components-panel/components-panel.module';
import {BodyGeneratorModule} from './body-generator/body-generator.module';
import {NbLayoutModule, NbMenuModule, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ComponentsPanelModule,
    BodyGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
