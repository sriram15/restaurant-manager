import {Component, OnInit} from '@angular/core'
import {MenuService} from '../shared/menu.service'
import {CurrentCartService} from '../shared/current.cart.service'
import {MenuListComponent} from './menu.list.component'

@Component({
    templateUrl: './order.page.template.html',
    entryComponents: [MenuListComponent]
})
export class OrderPageComponent implements OnInit{
    menu: any[]
    constructor(private menuService: MenuService, private currentCartService: CurrentCartService){
    }

    ngOnInit(){
        this.menu = this.menuService.getMenu();
        this.menu.forEach((item) => {
            item.menuItems.forEach((mItem) => {
                var findIndex = -1;
                this.currentCartService.currentCart.filter((cart, index) =>{
                    if(cart.id == mItem.id){
                        findIndex = index;
                    }
                });
                if(findIndex >= 0){
                    mItem.quantity = this.currentCartService.currentCart[findIndex].quantity;
                }else{
                    mItem.quantity = 0;
                }
            });
        });
    }
}