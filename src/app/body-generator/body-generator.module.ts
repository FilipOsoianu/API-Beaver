import {NgModule} from '@angular/core';
import {BodyGeneratorComponent} from './body-generator.component';
import {NbButtonModule, NbCardModule} from '@nebular/theme'; // we also need angular router for Nebular to function properly

@NgModule({
  declarations: [
    BodyGeneratorComponent
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
  ],
  providers: [],
  exports: [
    BodyGeneratorComponent
  ],
})
export class BodyGeneratorModule {
}
