import {NgModule} from '@angular/core';
import {BodyGeneratorComponent} from './body-generator.component';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {EnumToArrayPipe} from '../../pipes/enum-to-array.pipe';
import {CommonModule} from '@angular/common';
import {TypeEnum} from '../../enums/type.enum';
import {FormsModule} from '@angular/forms';
import {ComponentsPanelModule} from '../components-panel/components-panel.module';
import {ObjectTypeComponent} from './object-type/object-type.component'; // we also need angular router for Nebular to function properly

@NgModule({
  declarations: [
    BodyGeneratorComponent,
    EnumToArrayPipe,
    ObjectTypeComponent
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    NbSelectModule,
    CommonModule,
    FormsModule,
    ComponentsPanelModule,
    NbIconModule,
  ],
  providers: [],
  exports: [
    BodyGeneratorComponent
  ],
})
export class BodyGeneratorModule {
}
