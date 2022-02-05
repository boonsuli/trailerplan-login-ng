import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordForgotComponent } from './auth-password-forgot.component';

describe('AuthForgotPasswordComponent', () => {
  let component: AuthPasswordForgotComponent;
  let fixture: ComponentFixture<AuthPasswordForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPasswordForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPasswordForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
