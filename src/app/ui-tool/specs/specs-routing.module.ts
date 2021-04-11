import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpecComponent} from "./spec/spec.component";
import {SpecsListComponent} from "./specs-list/specs-list.component";

export const routes: Routes = [
  {
    path: '',
    component: SpecsListComponent,
  },
  {
    path: ':id',
    component: SpecComponent,
  },
  {
    path: ':id/traits',
    loadChildren: () => import('./response-generator/response-generator.module').then(m => m.ResponseGeneratorModule),
  },
  {
    path: ':id/object-generator',
    loadChildren: () => import('./body-generator/body-generator.module').then(m => m.BodyGeneratorModule),
  },
  {
    path: ':id/resource-type',
    loadChildren: () => import('./resource-type/resource-type.module').then(m => m.ResourceTypeModule),
  },
  {
    path: ':id/schema',
    loadChildren: () => import('./schema/schema.module').then(m => m.SchemaModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsRoutingModule {
}

