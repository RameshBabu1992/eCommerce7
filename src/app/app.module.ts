import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
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
  entryComponents:[CartDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
