import {Component, Input} from '@angular/core'

@Component({
    selector: 'cart-list',
    template: `
            <md-list-item *ngFor="let item of items">
                <p md-line>{{item.name}}</p>
                <p md-line>{{item.price}}</p>
                <p md-line>Total: {{item.price * item.quantity}}</p>
            </md-list-item>
    `
})
export class CartListComponent{
    @Input() items
}