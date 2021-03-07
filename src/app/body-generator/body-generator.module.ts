import {NgModule} from '@angular/core';
import {BodyGeneratorComponent} from './body-generator.component';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {EnumToArrayPipe} from '../../pipes/enum-to-array.pipe';
import {CommonModule} from '@angular/common';
import {TypeEnum} from '../../enums/type.enum';
import {FormsModule} from '@angular/forms'; // we also need angular router for Nebular to function properly

@NgModule({
  declarations: [
    BodyGeneratorComponent,
    EnumToArrayPipe
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    NbSelectModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    BodyGeneratorComponent
  ],
})
export class BodyGeneratorModule {
}
