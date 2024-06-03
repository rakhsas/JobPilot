import { Component, Input } from '@angular/core';

@Component({
  selector: 'spartan-alert',
  template: `
    <div hlmAlert  variant="destructive">
      <hlm-icon hlmAlertIcon [name]="iconName" />
      <h4 hlmAlertTitle>{{alertTitle}}</h4>
      <p hlmAlertDesc>
        {{alertDescription}}
      </p>
    </div>
  `,
})
export class AlertComponent {
  @Input() alertTitle: string = '';
  @Input() alertDescription: string = '';
  @Input() iconName: string = 'lucideBox';
}
