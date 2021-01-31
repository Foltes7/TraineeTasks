import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingOrderProductsComponent } from './editing-order-products.component';

describe('EdititngOrderProductsComponent', () => {
  let component: EditingOrderProductsComponent;
  let fixture: ComponentFixture<EditingOrderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingOrderProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingOrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
