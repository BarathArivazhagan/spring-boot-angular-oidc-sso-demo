import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgxSpinnerModule } from "ngx-spinner";

import { SSOService } from './oauth2/sso/sso.service';
import { UsersViewComponent } from './users-view/users-view.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/AuthGuard';
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthHttpInterceptor } from './interceptor/auth-http-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    SSOService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
