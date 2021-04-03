import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { NbAuthService, NbTokenService } from '@nebular/auth';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public auth: NbAuthService, public router: Router, private NbJwt: NbTokenService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = this.NbJwt.get();
    // decode the token to get its payload
    const tokenPayload = token['value'].payload;
    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
