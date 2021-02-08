import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: .5,left: '1000px'}), 
        animate(300)
      ]),
      transition('* => void', [
        style({ opacity:1, left: 0}), 
        animate(300,style({ opacity: .5, left: '-1000px'}))
      ]) 
    ])
  ]
})
export class CartDetailsComponent implements OnInit {
  hide: boolean;
  title: string;
  products: [] = [];

  constructor(public ps: ProductService){

  }
  ngOnInit(): void {
    this.products = this.ps.getCart();
    this.ps.cartListener.subscribe(e=>  {
      this.products = this.ps.getCart();
    })
  }
  onQtyChange(item){
    if(item.quantity <= 1)
        item.quantity = 1 ;
    this.ps.addToCart(item)
  }
  increment(item){
    item.quantity++;
    this.ps.addToCart(item)
  }
  decrement(item){
    item.quantity--;
    if(item.quantity <= 1){
      item.quantity=1;
    }
    this.ps.addToCart(item);
  }
  get getTotal(){
    let total = 0;
    for(let i in this.products){
      total += this.products[i]['quantity'] * this.products[i]['price'];
    }
    return total;
  }
  removeProduct(item){
    console.log("remove");
    this.ps.removeFromCart(item);
  }
  close(){
    this.hide = true;
  }

}
