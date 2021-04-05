import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_id');
          this.router.navigate(['/auth/login']);
          return false;
        } else {
          this.authService.getToken().subscribe((token: NbAuthSimpleToken) => {
            const jwtToken = new NbAuthJWTToken(token.getValue(), token.getOwnerStrategyName(), token.getCreatedAt());
            const expireDate = new Date(jwtToken.getTokenExpDate());
            localStorage.setItem("user_id", jwtToken.getPayload()['sub']);
            if (new Date() > expireDate) {
              localStorage.removeItem('access_token');
              localStorage.removeItem('user_id');
              this.router.navigate(['/auth/login']);
              return false;
            }
          });
        }
      }),
    );
  }
}
