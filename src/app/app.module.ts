import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsPanelModule} from './components-panel/components-panel.module';
import {BodyGeneratorModule} from './body-generator/body-generator.module';
import {NbCardModule, NbLayoutModule, NbMenuModule, NbMenuService, NbSelectModule, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbMenuInternalService} from '@nebular/theme/components/menu/menu.service';
import {EnumToArrayPipe} from '../pipes/enum-to-array.pipe';
import { ObjectTypeComponent } from './body-generator/object-type/object-type.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    ComponentsPanelModule,
    BodyGeneratorModule,
    NbCardModule,
    NbSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
