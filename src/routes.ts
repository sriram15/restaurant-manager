import { Routes } from '@angular/router'
import { OrderPageComponent} from './app/order/order.page.component'
import {CartPageComponent} from './app/cart/cart.page.component'

export const appRoutes: Routes = [
    {path:'order', component: OrderPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: '', redirectTo : '/order', pathMatch: 'full'}
]