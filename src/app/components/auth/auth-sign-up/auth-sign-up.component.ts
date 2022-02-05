import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../helpers/custom-validators";
import {UserService} from "../../../services/user/user.service";
import {FormHelperService} from "../../../helpers/form-helper.service";

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss']
})
export class AuthSignUpComponent implements OnInit {

  Genders: any = [ {id:1, name:'Man'}, {id:2, name:'Women'} ];
  StandardRoles: any = [ {id:2, name:'User', role_type_id:2}, {id:3,name:'Guest', role_type_id:2} ];
  PrivilegedRoles: any = [ {id:1, name:'Admin', role_type_id:1} ];
  RolesTypes: any = [ {id:1, short_name:'prv', name:'Privileged'}, {id:2, short_name:'std', name:'Standard'} ];
  UserRoles: any = [ this.PrivilegedRoles, this.StandardRoles ];
  SecretQuestions: any = [
    {id:1, short_name: 'first car brand', name: 'What is the brand of your first car?'},
    {id:2, short_name: 'favorite color', name: 'What is your favorite color ?'},
    {id:3, short_name: 'favorite hero', name: 'Who is your favorite hero?'},
    {id:4, short_name: 'birth city', name: 'What is your city of birth'},
    {id:5, short_name: "mother's firstname", name: "What is your mother's first name?"},
    {id:6, short_name: "first employer's name", name: 'What is the name of your first employer?'},
    {id:7, short_name: "favorite trail running race", name: 'What is your favorite trail running race ?'},
    {id:8, short_name: 'favorite trail equipment brand', name: 'What is your favorite trail equipment brand?'}
  ];

  user: User = new User();

  hidePassword = true;
  hideConfirmPassword  = true;

  passwordFocussed = false;
  innerInputFocussed() {
    this.passwordFocussed = true;
  }

  innerInputBlurred() {
    this.passwordFocussed = false;
  }

  public signUpForm:FormGroup = this.formBuilder.group({
    username: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_-]{3,25}$')
    ]],
    email: [null, [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]],
    decodedPassword: [null, [
      Validators.required,
      CustomValidators.patternValidator(/[0-9]/, { hasNumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, { hasNotCapitalCase: true }),
      CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      CustomValidators.patternValidator(/[_.,;:!"`+=<>*~§@#$%^&()]/, { hasSpecialCharacters: true }),
      CustomValidators.patternValidator(/^.{6,25}$/, { hasValidNbCharacters: true })
    ]],
    confirmPassword: [null, [
      Validators.required
    ]],
    encodedPassword: new FormControl(),
    role: [null, [
      Validators.required
    ]],
    first_name: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_-]{2,25}$')
    ]],
    last_name: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_-]{2,25}$')
    ]],
    gender: [null, [
      Validators.required
    ]],
    country: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z-]$')
    ]],
    secret_question: [null, [
      Validators.pattern('^[a-zA-Z0-9_-]{2,200}$')
    ]],
    secret_answer: [null, [
      Validators.pattern('^[a-zA-Z0-0_-]{2,200}$')
    ]]
  });

  get username(): AbstractControl { return this.signUpForm.controls['username']; }
  get email(): AbstractControl { return this.signUpForm.controls['email']; }
  get decodedPassword(): AbstractControl { return this.signUpForm.controls['decodedPassword']; }
  get encodedPassword(): AbstractControl { return this.signUpForm.controls['encodedPassword']; }
  get confirmPassword(): AbstractControl { return this.signUpForm.controls['confirmPassword']; }
  get role(): AbstractControl { return this.signUpForm.controls['role']; }
  get first_name(): AbstractControl { return this.signUpForm.controls['first_name']; }
  get last_name(): AbstractControl { return this.signUpForm.controls['last_name']; }
  get gender(): AbstractControl { return this.signUpForm.controls['gender']; }
  get country(): AbstractControl { return this.signUpForm.controls['country']; }
  get secret_question(): AbstractControl { return this.signUpForm.controls['secret_question']; }
  get secret_answer(): AbstractControl { return this.signUpForm.controls['secret_answer']; }

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private formHelperService: FormHelperService
  ) {
  }

  ngOnInit(): void {
    this.signUpForm.get('decodedPassword')?.valueChanges.subscribe(psw => {
      this.signUpForm.get('encodedPassword')?.setValue(btoa(psw));
      console.log('sign-up : decoded password : ' + psw)
      console.log('sign-up : encoded password : ' + btoa(psw))
    });
  }

  onSubmit(): void {
    console.log('submit login signup');
  }

  onConfirmPasswordChange() {
    if (this.confirmPassword.value !== this.decodedPassword.value) {
      this.confirmPassword.setErrors({ mismatch: true });
    }
  }

  resetFormValue(field: string): void {
    this.formHelperService.resetFormValue(this.signUpForm, field);
  }

}
