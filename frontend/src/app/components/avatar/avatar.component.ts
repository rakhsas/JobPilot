import { Component, Input } from '@angular/core';

@Component({
	selector: 'spartan-avatar',
	template: `
		<hlm-avatar >
			<img [src]="src" alt='spartan logo. Resembling a spartanic shield' hlmAvatarImage />
			<span class='text-white bg-destructive' hlmAvatarFallback>RG</span>
		</hlm-avatar>
  `
})
export class AvatarComponent {
	@Input() src: string = '';
}
