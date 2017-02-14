import {Injectable} from '@angular/core'
import {MenuClass} from './MenuClass'
import {MenuItemClass} from './MenuItemClass'

@Injectable()
export class MenuService{
    menu = [
    new MenuClass('Breakfast',[
        new MenuItemClass(1,'Abc', 50, 0,['abc', 'def', 'ads']),
        new MenuItemClass(2,'Aasdfbc', 50, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(3,'akertdfbc', 10, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(4,'pocbc', 50, 0,['abc', 'def', 'ads']),
        new MenuItemClass(5,'qwebc', 60, 0,['abc', 'def', 'ads']),
        new MenuItemClass(6,'nvmzbc', 50, 0, ['abc', 'def', 'ads'])]
    ),
    new MenuClass('Lunch',[
        new MenuItemClass(7,'pocbc', 50, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(8,'qwebc', 60, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(9,'nvmzbc', 50, 0, ['abc', 'def', 'ads'])]
    ),
    new MenuClass('Dinner',[
        new MenuItemClass(10,'nxcfbc', 10, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(11,'iuobc', 60, 0, ['abc', 'def', 'ads']),
        new MenuItemClass(12,'qwezbc', 50, 0, ['abc', 'def', 'ads'])]
    )
    ];

    getMenu(){
        return this.menu;
    }
}