import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './shared/shared-components/input-field/input-field.component';
import { ProductCardComponent } from './shared/shared-components/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmationMessageComponent } from './confirmation-message/confirmation-message.component';
@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrderConfirmationComponent,
    ShoppingCartComponent,
    HeaderComponent,
    ConfirmationMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
