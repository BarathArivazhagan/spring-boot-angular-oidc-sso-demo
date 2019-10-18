import { Component } from '@angular/core';
import { SSOService } from './oauth2/sso/sso.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui';
  isLoggedIn = false;
  userName: string;

  constructor(private ssoService: SSOService, private spinner: NgxSpinnerService) {}

    ngOnInit() {
        console.log('App component is initialized');
        this.spinner.show();
        this.isLoggedIn = this.ssoService.isLoggedIn();
        console.log('isLoggedIn '+this.isLoggedIn);
        if(!this.isLoggedIn) {
          
           //this.login();
           this.ssoService.initImplicitFlow();
           this.userName = this.ssoService.getUserName();
        }
       
        this.spinner.hide();
    }



    logout() {
        this.ssoService.logout();
    }
}
