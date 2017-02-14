import {Component, Input} from '@angular/core'

@Component({
    selector: 'contact-icon',
    template:   `
                <button md-button (click)="iconClick()">
                    <i class="material-icons md-18">link</i>{{iconName}}
                </button>
                `
})
export class ContactIconComponent{
    @Input() iconSrc;
    @Input() iconName;

    iconClick(){
        window.open(this.iconSrc);
    }
}