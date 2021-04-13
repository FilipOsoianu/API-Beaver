import {NgModule} from '@angular/core';
import {NameDirective} from "./name.directive";
import {ExampleDirective} from "./example.directive";
import {EnumToArrayPipe} from "../pipes/enum-to-array.pipe";


@NgModule({
  declarations: [
    NameDirective,
    ExampleDirective,
    EnumToArrayPipe,
  ],
  imports: [

  ],
  providers: [],
  exports: [
    NameDirective,
    ExampleDirective,
    EnumToArrayPipe,
  ],
})
export class SharedModule {
}
