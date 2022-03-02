import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationTemplateComponent } from './dialog-confirmation-template.component';

describe('DialogConfirmationTemplateComponent', () => {
  let component: DialogConfirmationTemplateComponent;
  let fixture: ComponentFixture<DialogConfirmationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
