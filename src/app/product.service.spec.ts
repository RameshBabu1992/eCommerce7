import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './product.service';


describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserModule
      ],
      providers:[ProductService]
    });
    service = TestBed.inject(ProductService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have addToCart Method working as expected', () => {
     service.addToCart({id:1, name: 'Name'});
     let object = JSON.parse(localStorage.getItem('cart'));
     expect(object.length).toBe(1);

     service.addToCart({id:1, name: 'Name'});
     let object2= JSON.parse(localStorage.getItem('cart'));
     expect(object2.length).toBe(1);

     service.addToCart({id:2, name: 'Name2'});
     let object3= JSON.parse(localStorage.getItem('cart'));
     expect(object3.length).toBe(2);

  });

  it('should have removeCart Method working as expected', () => {
    localStorage.setItem('cart', JSON.stringify([{id: 1, name:"Product1"}]));
    service.removeFromCart({id:1});
    let object = JSON.parse(localStorage.getItem('cart'));
    expect(object.length).toBe(0);
  });

  it('should have getCartItem Method working as expected', () => {
    let value = service.getCartItem({id:1});
    expect(value).toBeFalse();
  });

  


});
