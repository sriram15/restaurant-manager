import {Component} from '@angular/core'
import {CurrentCartService} from '../shared/current.cart.service'
import {CartItemComponent} from './cart-item.component'

@Component({
    templateUrl: './cart.page.component.html',
    entryComponents: [CartItemComponent]
})
export class CartPageComponent{
    displayList : any[]
    constructor(private currentCartService: CurrentCartService){
        this.displayList = this.currentCartService.currentCart;
    }
}