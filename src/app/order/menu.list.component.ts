import {Component, Input} from '@angular/core';
import {MenuService} from './shared/menu.service';
import {MenuItemComponent} from './menu.item.component';

@Component({
    selector: 'menu-list',
    template: `
        <div class='md-padding' layout="row" flex>
            <div layout="row" flex>
                <menu-item  layout="column" *ngFor="let menu of menuList" flex [menu]="menu" [quantity]=0></menu-item>
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

    constructor(){
    }
}