import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPathLinkComponent } from './orders-path-link.component';

describe('OrdersPathLinkComponent', () => {
  let component: OrdersPathLinkComponent;
  let fixture: ComponentFixture<OrdersPathLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPathLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPathLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
