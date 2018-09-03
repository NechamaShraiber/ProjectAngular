import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProduactComponent } from './cart-produact.component';

describe('CartProduactComponent', () => {
  let component: CartProduactComponent;
  let fixture: ComponentFixture<CartProduactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProduactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProduactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
