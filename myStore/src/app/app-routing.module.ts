import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConfirmationMessageComponent } from './confirmation-message/confirmation-message.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'productdetail/:id',
    component:ProductDetailsComponent
  },
  {
    path:'productlist',
    component:ProductListComponent
  },
  {
    path:'cart',
    component:ShoppingCartComponent
  },
  {
    path:'confirmationmessage',
    component:ConfirmationMessageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
