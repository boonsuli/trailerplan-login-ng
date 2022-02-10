import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignOutComponent } from './dialog-sign-out.component';

describe('DialogSignOutComponent', () => {
  let component: DialogSignOutComponent;
  let fixture: ComponentFixture<DialogSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
