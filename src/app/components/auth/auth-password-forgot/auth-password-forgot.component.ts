import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../helpers/custom-validators";
import {PasswordService} from "../../../services/auth/password.service";
import {FormHelperService} from "../../../helpers/form-helper.service";

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-password-forgot.component.html',
  styleUrls: ['./auth-password-forgot.component.scss']
})
export class AuthPasswordForgotComponent implements OnInit {
  ngOnInit(): void {
  }

  public passwordForgotForm:FormGroup = this.formBuilder.group({
    secretAnswerOne: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_-]{5,}$')
    ]],
    secretAnswerTwo: [null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_-]{3,25}$')
    ]],
    secretQuestionCustom: [null, [
      Validators.required,
      CustomValidators.patternValidator(/[0-9]/, { hasNumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, { hasNotCapitalCase: true }),
      CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      CustomValidators.patternValidator(/[éèàù]/, { hasAccentuatedCharacter: true }),
      CustomValidators.patternValidator(/[\'\"_.,;:!?]/, { hasSpecialCharacters: true }),
      CustomValidators.patternValidator(/^.{1,200}$/, { hasValidNbCharacters: true })
    ]],
    secretAnswerCustom: [null, [
      Validators.required,
      CustomValidators.patternValidator(/[0-9]/, { hasNumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, { hasNotCapitalCase: true }),
      CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      CustomValidators.patternValidator(/[éèàù]/, { hasAccentuatedCharacter: true }),
      CustomValidators.patternValidator(/[\'\"_.,;:!?]/, { hasSpecialCharacters: true }),
      CustomValidators.patternValidator(/^.{1,200}$/, { hasValidNbCharacters: true })
    ]],
    pinCodeReceived: [null, [
      Validators.required,
      CustomValidators.patternValidator(/^[0-9]{6}$/, { hasNumber: true }),
    ]]
  });

  get secretAnswerOne(): AbstractControl { return this.passwordForgotForm.controls['secretAnswerOne']; }
  get secretAnswerTwo(): AbstractControl { return this.passwordForgotForm.controls['secretAnswerTwo']; }
  get secretQuestionCustom(): AbstractControl { return this.passwordForgotForm.controls['secretQuestionCustom']; }
  get secretAnswerCustom(): AbstractControl { return this.passwordForgotForm.controls['secretAnswerCustom']; }
  get pinCodeReceived(): AbstractControl { return this.passwordForgotForm.controls['pinCodeReceived']; }

  constructor(
    private formBuilder: FormBuilder,
    private service: PasswordService,
    private helperService: FormHelperService
  ) {
  }

  onSubmit(): void {
  }

  resetFormValue(field: string): void {
    this.helperService.resetFormValue(this.passwordForgotForm, field);
  }
}
