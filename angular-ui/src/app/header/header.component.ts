import { Component, OnInit } from '@angular/core';
import { SSOService } from '../oauth2/sso/sso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public user: string;
  public localeDate: string;
  public localeTime: string;

  constructor(private ssoService: SSOService,private router: Router) { }

  ngOnInit() {

    this.user = 'Barath';
    setInterval(() => {
      const date = new Date();
      this.localeDate = date.toLocaleDateString();
      this.localeTime = date.toLocaleTimeString();
    }, 1);
  }

  logout() {
     console.log("logout initiated ");
     this.ssoService.logout();
     this.router.navigate(['logout']);
  }

}
