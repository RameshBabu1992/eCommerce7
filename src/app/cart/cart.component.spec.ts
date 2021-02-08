import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ProductComponent } from '../product/product.component';

import { CartComponent } from './cart.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

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
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Cart Component is created', () => {
    expect(component).toBeTruthy();
  });
  it('Should Conatian cart content', () => {
    const fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#cart').textContent).toContain('Cart');
  });
  
  it('Should onCartClick method', () => {
    let tmp = null;
    component.cartClicked.subscribe(e=> tmp = e)
    component.onCartClick();
    expect(tmp).not.toBeNull();
  });
  
});
