import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteWindowComponent } from './confirmation-delete-window.component';

describe('ConfirmationDeleteWindowComponent', () => {
  let component: ConfirmationDeleteWindowComponent;
  let fixture: ComponentFixture<ConfirmationDeleteWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDeleteWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDeleteWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
