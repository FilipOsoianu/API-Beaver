import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyGeneratorComponent} from './body-generator-panel/body-generator/body-generator.component';


const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        BodyGeneratorComponent
    ],
    exports: [RouterModule, BodyGeneratorComponent]
})
export class AppRoutingModule { }
