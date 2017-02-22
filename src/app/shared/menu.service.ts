import {Injectable} from '@angular/core'
import {MenuClass} from './MenuClass'
import {MenuItemClass} from './MenuItemClass'

@Injectable()
export class MenuService{
    menu = [
    new MenuClass('Breakfast',[
        new MenuItemClass('Abc', 50, ['abc', 'def', 'ads']),
        new MenuItemClass('Aasdfbc', 50, ['abc', 'def', 'ads']),
        new MenuItemClass('akertdfbc', 10, ['abc', 'def', 'ads']),
        new MenuItemClass('pocbc', 50, ['abc', 'def', 'ads']),
        new MenuItemClass('qwebc', 60, ['abc', 'def', 'ads']),
        new MenuItemClass('nvmzbc', 50, ['abc', 'def', 'ads'])]
    ),
    new MenuClass('Lunch',[
        new MenuItemClass('pocbc', 50, ['abc', 'def', 'ads']),
        new MenuItemClass('qwebc', 60, ['abc', 'def', 'ads']),
        new MenuItemClass('nvmzbc', 50, ['abc', 'def', 'ads'])]
    ),
    new MenuClass('Dinner',[
        new MenuItemClass('nxcfbc', 10, ['abc', 'def', 'ads']),
        new MenuItemClass('iuobc', 60, ['abc', 'def', 'ads']),
        new MenuItemClass('qwezbc', 50, ['abc', 'def', 'ads'])]
    )
    ];

    getMenu(){
        return this.menu;
    }
}