import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/AuthGuard';
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



const routes: Routes = [{
  path: '', component: HomeComponent
},{
  path: 'users', component: UsersViewComponent, 
  canActivate: [AuthGuard]
}, {
  path: 'logout', component: LogoutComponent,
}, {
  path: 'unauthorized' , component: UnauthorizedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
