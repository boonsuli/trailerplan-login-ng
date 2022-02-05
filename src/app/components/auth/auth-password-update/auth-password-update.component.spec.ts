import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordUpdateComponent } from './auth-password-update.component';

describe('AuthUpdatePasswordComponent', () => {
  let component: AuthPasswordUpdateComponent;
  let fixture: ComponentFixture<AuthPasswordUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPasswordUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
