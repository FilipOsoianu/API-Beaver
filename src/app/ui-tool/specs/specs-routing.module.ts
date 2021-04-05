import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpecsComponent} from "./specs.component";

export const routes: Routes = [
  {
    path: '',
    component: SpecsComponent,
    children: [
      {
        path: '',
        component: SpecsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsRoutingModule {}
