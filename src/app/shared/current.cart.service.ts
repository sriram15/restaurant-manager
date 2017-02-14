import {Injectable} from '@angular/core'

@Injectable()
export class CurrentCartService{
    currentCart: any[]

    constructor(){
        this.currentCart = []
    }

    updateCart(obj){
        var lIndex = -1;
        this.currentCart.filter((item, index)=>{
            if(item.id == obj.id){
                lIndex = index;
            }
        });

        if(lIndex == -1){
            this.currentCart.push(obj);
        }else if(lIndex >= 0){
            if(obj.quantity > 0){
                this.currentCart[lIndex].quantity = obj.quantity;
            }else{
                this.currentCart.splice(lIndex,1);
            }
        }
    }
}