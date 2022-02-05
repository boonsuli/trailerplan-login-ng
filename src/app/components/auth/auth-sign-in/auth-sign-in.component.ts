import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {FormHelperService} from "../../../helpers/form-helper.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {

  hidePassword = true;
  wrongCredentials: boolean = false;

  isLoggedIn:boolean = false;
  isLoginFailed:boolean = false;
  errorMessage = '';
  roles: string[] = [];

  signInForm: FormGroup;

  get username(): AbstractControl { return this.signInForm.controls['username']; }
  get password(): AbstractControl { return this.signInForm.controls['password']; }
  get encoded_password(): AbstractControl { return this.signInForm.controls['encoded_password']; }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
    private tokenStorage: TokenStorageService,
    private formHelperService: FormHelperService,
  ) {
    this.signInForm = new FormGroup({
      'username': new FormControl(null, [
        Validators.required
      ]),
      'password': new FormControl(null, [
        Validators.required
      ]),
      'encoded_password': new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    console.log('username:' + this.username.value);
    console.log('password:' + this.password.value);
    this.encoded_password.setValue(btoa(this.password.value));   //convert password into base64
    console.log('encoded_password:' + this.encoded_password.value);

    if(this.signInForm.valid) {
      console.log('form is valid');
      this.service.signIn(this.username.value, this.encoded_password.value)
        .pipe(first())
        .subscribe(
        data => {
                this.tokenStorage.saveToken(data["token"]);
                this.tokenStorage.saveUser(data["user"]);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;

                this.router.navigate(['home']).then();
            },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.log('erreur')
        }
    );
    } else {

    }
  }

  resetFormValue(field: string): void {
    this.formHelperService.resetFormValue(this.signInForm, field);
  }

  private reloadPage(): void {
    window.location.reload();
  }
}
