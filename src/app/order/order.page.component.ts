import {Component, OnInit} from '@angular/core'
import {MenuService} from './shared/menu.service'
import {MenuListComponent} from './menu.list.component'

@Component({
    templateUrl: './order.page.template.html',
    entryComponents: [MenuListComponent]
})
export class OrderPageComponent implements OnInit{
    menu: any[]
    constructor(private menuService: MenuService){}

    ngOnInit(){
        this.menu = this.menuService.getMenu();
    }
}