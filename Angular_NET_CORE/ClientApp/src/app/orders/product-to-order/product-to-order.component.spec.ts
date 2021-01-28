import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToOrderComponent } from './product-to-order.component';

describe('ProductToOrderComponent', () => {
  let component: ProductToOrderComponent;
  let fixture: ComponentFixture<ProductToOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
