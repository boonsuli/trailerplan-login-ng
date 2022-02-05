import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthSignInComponent} from "./components/auth/auth-sign-in/auth-sign-in.component";
import {AuthSignUpComponent} from "./components/auth/auth-sign-up/auth-sign-up.component";
import {AuthPasswordForgotComponent} from "./components/auth/auth-password-forgot/auth-password-forgot.component";
import {HomeComponent} from "./components/page/home/home.component";
import {CommonModule} from "@angular/common";
import {InfoComponent} from "./components/page/info/info.component";
import {AuthSignOutComponent} from "./components/auth/auth-sign-out/auth-sign-out.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth-sign-in', pathMatch: 'full' },
  { path: 'auth-sign-in', component: AuthSignInComponent },
  { path: 'auth-sign-up', component: AuthSignUpComponent },
  { path: 'auth-sign-out', component: AuthSignOutComponent },
  { path: 'auth-password-forgot', component: AuthPasswordForgotComponent },
  { path: 'home', component: HomeComponent},
  { path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
