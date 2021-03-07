import {NgModule} from '@angular/core';
import {ComponentsPanelComponent} from './components-panel.component';
import {MethodComponent} from './method/method.component';
import {MethodsBoxComponent} from './methods-box/methods-box.component';
import {GenericBoxComponent} from './generic-box/generic-box.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MethodComponent,
    MethodsBoxComponent,
    GenericBoxComponent,
    ComponentsPanelComponent
  ],
  imports: [
    CommonModule
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
