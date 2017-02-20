import {Injectable} from '@angular/core'

@Injectable()
export class MenuService{
    menu = [
        {name: 'Abc', price: 50, ingredients: ['abc', 'def', 'ads']},
        {name: 'asdf', price: 20, ingredients: ['abc', 'def', 'ads']},
        {name: 'asdfc', price: 30, ingredients: ['abc', 'def', 'ads']},
        {name: 'asdfc', price: 100, ingredients: ['abc', 'def', 'ads']}
    ];

    getMenu(){
        return this.menu;
    }
}