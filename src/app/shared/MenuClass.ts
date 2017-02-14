import {MenuItemClass} from './MenuItemClass'

export class MenuClass{
    constructor(
        public title: string,
        public menuItems: MenuItemClass[]
    ){}
}