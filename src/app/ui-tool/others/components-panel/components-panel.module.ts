import {NgModule} from '@angular/core';
import {ComponentsPanelComponent} from './components-panel.component';
import {MethodComponent} from './method/method.component';
import {MethodsBoxComponent} from './methods-box/methods-box.component';
import {GenericBoxComponent} from './generic-box/generic-box.component';
import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbSidebarModule} from '@nebular/theme';


@NgModule({
  declarations: [
    MethodComponent,
    MethodsBoxComponent,
    GenericBoxComponent,
    ComponentsPanelComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,

  ],
  providers: [],
  exports: [
    ComponentsPanelComponent,
    MethodComponent,
    MethodsBoxComponent,
    GenericBoxComponent,
  ],
})
export class ComponentsPanelModule {
}
