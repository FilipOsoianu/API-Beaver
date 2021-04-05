import {Component} from '@angular/core';
import {NbAuthResult, NbLoginComponent, NbRegisterComponent} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends NbRegisterComponent {

  register() {
    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      console.log(this.user);
      console.log(result);

      if (result.isSuccess()) {

      } else {
        this.errors = result.getErrors();
      }
      //
      const redirect = result.getRedirect();
      setTimeout(() => {
        return this.router.navigateByUrl(redirect);
      }, this.redirectDelay);
      // this.cd.detectChanges();
    });
  }
}
