
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spartan-button',
  template: ` <button hlmBtn [class]="class">{{placeHolder}}</button> `,
})
export class ButtonComponent {
    @Input() placeHolder: string = '';
    @Input() class: string = '';
}
