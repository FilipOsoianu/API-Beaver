import {RouterModule, Routes} from '@angular/router';
import {UiToolLayoutComponent} from "./ui-tool-layout.component";

const appRoutes: Routes = [
  {
    path: '',
    component: UiToolLayoutComponent,
    children: [
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
