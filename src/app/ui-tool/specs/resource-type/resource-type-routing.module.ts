import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourceTypeComponent} from "./resource-type.component";

export const routes: Routes = [
  {
    path: '',
    component: ResourceTypeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceTypeRoutingModule {
}

