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
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }
      const redirect = result.getRedirect();
      setTimeout(() => {
        return this.router.navigateByUrl(redirect);
      }, this.redirectDelay);
    });
  }
}
