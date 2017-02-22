import {Component, Input} from '@angular/core'

@Component({
    selector: 'cart-item',
    template: `
        <md-card>
            <md-card-title>{{item.name}}</md-card-title>
            <md-card-subtitle>{{item.price}}</md-card-subtitle>
            Total: {{item.price * item.quantity}}
        </md-card>
    `
})
export class CartItemComponent{
    @Input() item
}