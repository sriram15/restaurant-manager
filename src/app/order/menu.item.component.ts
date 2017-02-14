import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'menu-item',
    template: `
        <md-card>
            <md-card-header>
                <md-card-title>{{menu.name}}</md-card-title>
                <md-card-subtitle>{{menu.ingredients}}</md-card-subtitle>
            </md-card-header>
            <img md-card-image>            
            <md-card-actions>
                <div class="price"><b><h4>&#8377;{{menu.price}}</h4></b></div>
                <div class="actionButtons">
                    <button md-primary md-mini-fab color="primary" (click)="removeButtonEvent()" [disabled]="checkDisabled()"><md-icon>remove</md-icon></button>
                    <input class="form-control" type="number" placeholder="Quanity" (change)="checkQuantityValue()" [(ngModel)]="menu.quantity" min="0"/>
                    <button md-mini-fab color="primary" (click)="addButtonEvent()"><md-icon>add</md-icon></button>
                </div>
            </md-card-actions>
        </md-card>
    `,
    styles: [`
        md-card img{
            height: 200px;
            border:1px solid grey;
        }
        md-card-actions{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        md-card-actions .price{
            flex-basis: 50%;
            margin-left: 30px;
        }

        md-card-actions .actionButtons{
            display: flex;
            flex-basis: 60%;
            justify-content: center;
            align-items: center;
        }
        md-card-actions input{
            display: inline-block;
        }
        md-card-actions button{
            margin: 5px;
        }

        md-card-actions input[type=number]::-webkit-inner-spin-button, 
        md-card-actions input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0; 
        }
    `]
})
export class MenuItemComponent{
    @Input() menu: any
    @Input() category: string
    @Output() quantityChange = new EventEmitter();

    checkQuantityValue(){
        if(this.menu.quantity < 0){
            this.menu.quantity = 0;
        }
    }
    checkDisabled(){
        return (this.menu.quantity == 0);
    }
    addButtonEvent(){
        this.menu.quantity++;
        this.quantityChange.emit({id: this.menu.id ,name: this.menu.name, price: this.menu.price, quantity: this.menu.quantity,category: this.category});
    }

    removeButtonEvent(){
        if(this.menu.quantity > 0){
            this.menu.quantity -- ;
            this.quantityChange.emit({id: this.menu.id ,name: this.menu.name, price: this.menu.price, quantity: this.menu.quantity, category:this.category});
        }
    }
}