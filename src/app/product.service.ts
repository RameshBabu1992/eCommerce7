import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, Observable } from 'rxjs';
import  {map,take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartListener = new BehaviorSubject(0);
  
  constructor(private _http: HttpClient) { 
     this.publishCartLength();
  }

  publishCartLength(){
    let items = this.getCart();
    let length = items?items.length:0;
    this.cartListener.next(length);
  }

  getProducts(): Observable<[]> {
      return this._http.get<{data:[]}>('https://www.mocky.io/v2/5eda4003330000740079ea60')
      .pipe(map(result => result.data));
  }

  addToCart(item){
      let cart:any = localStorage.getItem('cart');
      cart = JSON.parse(cart);
      if(cart == undefined){ 
        localStorage.setItem('cart', JSON.stringify([item]))
      }else{
        let product =  this.getCartItem(item.id);
        if(product){
          cart = cart.map(e=>{
              if(e.id == product.id){
                e = item; 
              }
              return e;
          });
        }else{
          cart.push(item);
        }
        localStorage.setItem('cart',JSON.stringify(cart));
      }
      this.publishCartLength();
      return true;
  }
  removeFromCart(item){
    let cart:any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let product =  this.getCartItem(item.id);
    if(product){
      cart = cart.filter(e => e.id !== item.id)
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.publishCartLength();
  }
  getCartItem(id){
    let cart:any = localStorage.getItem('cart');
    if(!cart) return false;
    cart = JSON.parse(cart);
    return cart.find(item => item.id == id);
  }
  getCart(){
    return JSON.parse(localStorage.getItem('cart'));
  }
}
