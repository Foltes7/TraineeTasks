import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititngOrderProductsComponent } from './editing-order-products.component';

describe('EdititngOrderProductsComponent', () => {
  let component: EdititngOrderProductsComponent;
  let fixture: ComponentFixture<EdititngOrderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdititngOrderProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdititngOrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
