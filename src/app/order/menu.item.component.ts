import {Component, Input} from '@angular/core';

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
                <button md-primary md-mini-fab color="primary" (click)="removeButtonEvent()" [disabled]="checkDisabled()"><md-icon>remove</md-icon></button>
                <input class="form-control" type="number" placeholder="Quanity" (change)="checkQuantityValue()" [(ngModel)]="quantity" min="0"/>
                <button md-mini-fab color="primary" (click)="addButtonEvent()"><md-icon>add</md-icon></button>
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
        md-card-actions input{
            display: inline-block;
        }
        md-card-actions button{
            margin: 5px;
        }
    `]
})
export class MenuItemComponent{
    @Input() menu
    @Input() quantity;

    checkQuantityValue(){
        if(this.quantity < 0){
            this.quantity = 0;
        }
    }
    checkDisabled(){
        return (this.quantity == 0);
    }
    addButtonEvent(){
        this.quantity++;
    }

    removeButtonEvent(){
        if(this.quantity > 0){
            this.quantity -- ;
        }
    }
}