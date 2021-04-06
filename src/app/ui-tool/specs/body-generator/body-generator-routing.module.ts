import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyGeneratorComponent} from "./body-generator.component";

export const routes: Routes = [
  {
    path: '',
    component: BodyGeneratorComponent,
    children: [
      {
        path: '',
        component: BodyGeneratorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyGeneratorRoutingModule {}
