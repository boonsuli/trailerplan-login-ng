import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthSignInComponent} from './components/auth/auth-sign-in/auth-sign-in.component';
import {AuthSignUpComponent} from './components/auth/auth-sign-up/auth-sign-up.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './components/page/home/home.component';

import {authInterceptorProviders} from './helpers/auth.interceptor';
import {AuthPasswordForgotComponent} from './components/auth/auth-password-forgot/auth-password-forgot.component';
import {AuthPasswordUpdateComponent} from './components/auth/auth-password-update/auth-password-update.component';
import {HeaderComponent} from "./components/navigation/header/header.component";
import {InfoComponent} from './components/page/info/info.component';
import {SidenavListComponent} from './components/navigation/sidenav/sidenav.component';
import {FooterComponent} from './components/navigation/footer/footer.component';
import {UserService} from "./services/user/user.service";
import {AuthService} from "./services/auth/auth.service";
import {PasswordService} from "./services/auth/password.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "./angular-material.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {RoutingModule} from './routing/routing.module';
import {FormHelperService} from "./helpers/form-helper.service";
import {User} from "./models/user.model";
import {RouterModule} from "@angular/router";
import {CdkColumnDef} from "@angular/cdk/table";
import { AuthSignOutComponent } from './components/auth/auth-sign-out/auth-sign-out.component';
import { DialogSignOutComponent } from './components/dialog/dialog-sign-out/dialog-sign-out.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {SidenavService} from "./services/widget/sidenav.service";
//import {OpenSidebarOnSwipeDirective} from "./components/navigation/sidenav/open-sidebar-on-swipe.directive";

@NgModule({
  declarations: [
    AppComponent,
    AuthSignInComponent,
    AuthSignUpComponent,
    AuthSignOutComponent,
    AuthPasswordForgotComponent,
    AuthPasswordUpdateComponent,
    HomeComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    DialogSignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RoutingModule,
    RouterModule,
  ],
  exports: [
    MatMenuModule
  ],
  providers: [
    authInterceptorProviders,
    CdkColumnDef,
    AuthService,
    UserService,
    PasswordService,
    FormHelperService,
    SidenavService,
    User,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MatSidenav,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
