import { Component, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';
import { EventEmitter } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalItems:number = 0;
  
  @Output() cartClicked =  new EventEmitter();
  
  constructor(private ps: ProductService) { }
  
  ngOnInit(): void {
    this.ps.cartListener.subscribe(e=> this.totalItems = e)
  }

  onCartClick(){
    console.log('click from cart comp')
    this.cartClicked.emit('');
  }


}
