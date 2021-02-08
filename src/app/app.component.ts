import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductService } from './product.service';

import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerce7';

  @ViewChild('cartList', { read: ViewContainerRef }) comps: ViewContainerRef;

  constructor(private ps: ProductService, private componentFactoryResolver: ComponentFactoryResolver) {
  }
  
  onCartClick1(){
    console.log('click from app comp')
    this.comps.clear();
    let ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CartDetailsComponent);
    let ComponentRef = this.comps.createComponent(ComponentFactory);
    (<CartDetailsComponent>ComponentRef.instance).hide = false;;
    (<CartDetailsComponent>ComponentRef.instance).title = "Cart Details";
    
  }
  

}
