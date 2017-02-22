import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material'
import {RouterModule} from '@angular/router'
import 'hammerjs';

import { AppComponent } from './app.component';
import {ContactIconComponent} from './contact-icon.component';
import {NavbarComponent} from './nav/navbar.component';
import {OrderPageComponent} from './order/order.page.component';
import {MenuListComponent} from './order/menu.list.component';
import {MenuItemComponent} from './order/menu.item.component';
import {CartPageComponent} from './cart/cart.page.component';
import {CartItemComponent} from './cart/cart-item.component'

import {CurrentCartService} from './shared/current.cart.service'
import {MenuService} from './shared/menu.service';
import {appRoutes} from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactIconComponent,
    NavbarComponent,
    OrderPageComponent,
    MenuListComponent,
    MenuItemComponent,
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MenuService, CurrentCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
