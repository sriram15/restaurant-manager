import {Component} from '@angular/core'
import {CurrentCartService} from '../shared/current.cart.service'
import {CartListComponent} from './cart.list.component'

@Component({
    templateUrl: './cart.page.component.html',
    entryComponents: [CartListComponent]
})
export class CartPageComponent{
    displayList : any[]
    constructor(private currentCartService: CurrentCartService){
        this.displayList = this.currentCartService.currentCart;
        
        //sorting alphabetically
        //TODO: to improve and sort based on the categort listing in menu.
        this.displayList.sort(function(a:any,b:any){
            if(a.category == b.category){
                return 0;
            }else if(a.category > b.category){
                return 1;
            }else{
                return -1;
            }
        });
    }
}