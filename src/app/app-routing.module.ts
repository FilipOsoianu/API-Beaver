import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NbCardModule} from '@nebular/theme';
import {BodyGeneratorComponent} from './body-generator/body-generator.component';

const routes: Routes = [
  {
    path: 'home',
    component: BodyGeneratorComponent
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NbCardModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
