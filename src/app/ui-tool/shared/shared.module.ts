import {NgModule} from '@angular/core';
import {NameDirective} from "./name.directive";
import {ExampleDirective} from "./example.directive";
import {EnumToArrayPipe} from "../pipes/enum-to-array.pipe";
import {EnumToKeysArrayPipe} from "../pipes/enum-to-keys-array.pipe";


@NgModule({
  declarations: [
    NameDirective,
    ExampleDirective,
    EnumToArrayPipe,
    EnumToKeysArrayPipe
  ],
  imports: [

  ],
  providers: [],
  exports: [
    NameDirective,
    ExampleDirective,
    EnumToArrayPipe,
    EnumToKeysArrayPipe
  ],
})
export class SharedModule {
}
