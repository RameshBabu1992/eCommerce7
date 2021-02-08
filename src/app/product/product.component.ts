import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable, Subscription } from 'rxjs';

interface ProductDto{
  id: number,
  name: string,
  description: string,
  price: string,
  quantity: string,
  image: string,
  addedToCart: boolean
}

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductDto[];
  subscribption: Subscription;
  constructor(public ps:ProductService) { }

  ngOnInit(): void {
    this.subscribption = this.ps.getProducts().subscribe(items=>{
      this.products = items;
      this.syncWithCart();
    });
    this.ps.cartListener.subscribe(e=>{
      if(this.products)
        this.syncWithCart();  
    })
  }

  syncWithCart(){
    this.products.map(item => {
      let pr = this.ps.getCartItem(item.id);
      if(pr){ 
        item.addedToCart = true;
        item.quantity = pr.quantity;
      }else{
        item.addedToCart = false;
      }
      return item;
    })
  }

  ngOnDestroy(){
    this.subscribption.unsubscribe();
  }

  addToCart($event,item){
    $event.preventDefault();
    item.addedToCart = !0;
    this.ps.addToCart(item);
  }
  


}





