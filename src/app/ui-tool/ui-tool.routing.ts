import {RouterModule, Routes} from '@angular/router';
import {UiToolLayoutComponent} from "./ui-tool-layout.component";
import {AuthGuard} from "../auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: '',
    component: UiToolLayoutComponent,
    children: [
      {
        path: 'objectGenerator',
        loadChildren: () => import('./object-generator/body-generator/body-generator.module').then(m => m.BodyGeneratorModule),
      },
      {
        path: 'specs',
        loadChildren: () => import('./specs/specs.module').then(m => m.SpecsModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
    ],
  },
];

export const routing = RouterModule.forChild(appRoutes);
