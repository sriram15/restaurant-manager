import {Component, Input} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {CurrentCartService} from '../shared/current.cart.service'
import {MenuItemComponent} from './menu.item.component';

@Component({
    selector: 'menu-list',
    template: `
        <div class='md-padding' layout="row" flex>
            <div layout="row" flex>
                <menu-item layout="column" *ngFor="let menu of menuList;let i = index;" flex [menu]="menu" [category]="category" (quantityChange)="itemQuantityChanged($event)"></menu-item>
            </div>
        </div>
    `,
    styles: [`
        menu-item{
            display: inline-block;
            width: 300px;
            margin: 10px;
        }
    `],
    entryComponents: [MenuItemComponent]
})
export class MenuListComponent{
    @Input() menuList : any[]
    @Input() category: string
    constructor(private currentCartService: CurrentCartService){
    }

    itemQuantityChanged(obj){
        this.currentCartService.updateCart(obj);
    }
}