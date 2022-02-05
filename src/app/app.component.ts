import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {UserService} from "./services/user/user.service";
import {PasswordService} from "./services/auth/password.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trailerplan-login-ng';

  public login: any;
  public width: number = 0;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private passwordService: PasswordService,
    private cdr: ChangeDetectorRef) {
  }

  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.login = {
      id: 0,
      username: '',
      password: {},
      type: {}
    }
  }

  signIn() {
    this.authService.signIn(this.login.username, this.login.password)
  }

  refreshToken() {
    this.authService.refreshToken();
  }

  signOut() {
    this.authService.signOut();
  }

  sidenavToggle() {
    console.log("dans le sidenav container");
  }

}
