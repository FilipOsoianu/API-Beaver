import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../@theme/theme.module';
import {UiToolLayoutComponent} from './ui-tool-layout.component';
import {routing} from './ui-tool.routing';

@NgModule({
  imports: [
    routing,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    UiToolLayoutComponent,
  ],
  providers: [],
})
export class UiToolModule {
}
