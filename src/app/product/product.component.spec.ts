import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable,from } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../product.service';

import { ProductComponent } from './product.component';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

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
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has decrement method working properly', () => {
    component.products = [];
    spyOn(component.ps, 'getProducts').and.callThrough();
    component.ngOnInit();
    expect(component.ps.getProducts).toHaveBeenCalled();
  });

  it('has syncWithCart method working properly', () => {
    component.products = [
    {id:1, quantity: '2',name:'Name','description':'Desc',price:'0',addedToCart:true, image:''},
    {id:2, quantity: '2',name:'Name','description':'Desc',price:'0',addedToCart:true, image:''}];
    localStorage.clear();
    component.ps.addToCart({id:1, quantity: '10'});
    component.syncWithCart();
    expect(component.products['quantity']).toBeGreaterThan(9);
  });
  
  it('has addToCart method working properly', () => {
    spyOn(component.ps, 'addToCart');
    component.addToCart({preventDefault(){}},{});
    expect(component.ps.addToCart).toHaveBeenCalled();
  });


});
