import {RouterModule, Routes} from '@angular/router';
import {UiToolLayoutComponent} from "./ui-tool-layout.component";

const appRoutes: Routes = [
  {
    path: '',
    component: UiToolLayoutComponent,
    // canActivate: [AuthGuard],
    // canActivate: [UserRouteAccessService],
    data: {
      authorities: [],
    },
    children: [
      {
        path: 'objectGenerator',
        // canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
        loadChildren: () => import('./object-generator/body-generator/body-generator.module').then(m => m.BodyGeneratorModule),
      },
      {
        path: 'profile',
        // canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
    ],
  },
];

export const routing = RouterModule.forChild(appRoutes);
