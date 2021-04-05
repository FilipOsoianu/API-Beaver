import {Component} from '@angular/core';
import {NbAuthResult, NbLoginComponent} from '@nebular/auth';
import {UserModel} from "../../ui-tool/object-generator/models/user.model";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {


  login(): void {
    // this.user = new UserModel();

    this.errors = this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      console.log(this.user);
      console.log(result);

      if (result.isSuccess()) {
      //   if (result['token']['payload'].roles.includes('ADMIN')) {
      //     this.messages = result.getMessages();
      //   } else {
      //     this.errors = ['You do not have access to the dashboard'];
      //   }
      } else {
        this.errors = result.getErrors();
      }
      const redirect = result.getRedirect();
      setTimeout(() => {
        return this.router.navigateByUrl(redirect);
      }, this.redirectDelay);
      // this.cd.detectChanges();
    });
  }

}
