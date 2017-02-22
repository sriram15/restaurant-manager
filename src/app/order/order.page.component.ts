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
    quantityList : number[]
    constructor(private menuService: MenuService, private currentCartService: CurrentCartService){
    }

    ngOnInit(){
        this.menu = this.menuService.getMenu();
        this.quantityList = [];
        this.menu.forEach((item) => {
            item.menuItems.forEach((mItem) => {
                var findIndex = -1;
                this.currentCartService.currentCart.filter((cart, index) =>{
                    if(cart.name == mItem.name){
                        findIndex = index;
                    }
                });
                if(findIndex >= 0){
                    this.quantityList.push(this.currentCartService.currentCart[findIndex].quantity);
                }else{
                    this.quantityList.push(0);
                }
            });
        });
        console.log(this.quantityList);
    }
}