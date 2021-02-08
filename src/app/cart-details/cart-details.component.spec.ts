import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';

import { CartDetailsComponent } from './cart-details.component';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CartComponent,
        ProductComponent,
        CartDetailsComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('has onQtyChange method working properly', () => {
    spyOn(component.ps, 'addToCart').and.callThrough();
    component.onQtyChange({id:1,quantity:1,name:'Name'});
    expect(component.ps.addToCart).toHaveBeenCalled();
  });

  it('has increment method working properly', () => {
    spyOn(component.ps, 'addToCart').and.callThrough();
    component.increment({id:1,quantity:1,name:'Name'});
    expect(component.ps.addToCart).toHaveBeenCalled();
  });
  it('has decrement method working properly', () => {
    spyOn(component.ps, 'addToCart').and.callThrough();
    component.decrement({id:1,quantity:1,name:'Name'});
    expect(component.ps.addToCart).toHaveBeenCalled();
  });
  it('has removeProduct method working properly', () => {
    spyOn(component.ps, 'removeFromCart').and.callThrough();
    component.removeProduct({id:1,quantity:1,name:'Name'});
    expect(component.ps.removeFromCart).toHaveBeenCalled();
  });

  it('has removeProduct method working properly', () => {
    component.close();
    expect(component.hide).toBeTrue();

  });

  
});
