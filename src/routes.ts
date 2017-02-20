import { Routes } from '@angular/router'
import { OrderPageComponent} from './app/order/order.page.component'

export const appRoutes: Routes = [
    {path:'order', component: OrderPageComponent},
    {path: '', redirectTo : '/order', pathMatch: 'full'}
]