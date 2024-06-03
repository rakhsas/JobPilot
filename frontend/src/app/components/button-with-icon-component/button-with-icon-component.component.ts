import { Component, Input } from '@angular/core';
import { IconSize } from '../../../../components/ui-icon-helm/src/lib/hlm-icon.component';

export type SpartanIconPosition = 'left' | 'right';
export type SpartanDisabled = 'true' | 'false';
@Component({
  selector: 'spartan-button-with-icon',
  templateUrl: './button-with-icon-component.component.html',
  styleUrl: './button-with-icon-component.component.css',
})
export class ButtonWithIconComponent {
  @Input() iconName: string = 'lucideMail';
  @Input() className: string = '';
  @Input() iconPosition: SpartanIconPosition = 'left';
  @Input() text: string = 'Login with Email';
  @Input() iconSize: IconSize = 'sm';
  @Input() disable: boolean = false;
}
