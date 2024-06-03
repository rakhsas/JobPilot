import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithIconComponent } from './button-with-icon-component/button-with-icon-component.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideMail, lucideBox, lucideMoveRight, lucideMusic, lucidePenTool, lucideCode2, lucideMegaphone, lucideMonitorPlay, lucideDatabase, lucideStethoscope, lucideBarChart2, lucideBriefcase, lucideBookmark, lucideDribbble, lucideStar, lucideQuote, lucideArrowRight, lucideArrowLeft, lucideCircleUser, lucideBuilding2 } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective, HlmAlertTitleDirective} from '@spartan-ng/ui-alert-helm';
import { AlertComponent } from './alert/alert.component';
import { HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective } from '@spartan-ng/ui-avatar-helm';
import { AvatarComponent } from './avatar/avatar.component';
import { SelectScrollablePreviewComponent } from './select/select.component';
import { HlmInputDirective } from '../../../components/ui-input-helm/src/lib/hlm-input.directive';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { HlmTabsComponent } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs.component';
import { HlmTabsContentDirective } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs-content.directive';
import { HlmTabsListComponent } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs-list.component';
import { HlmTabsTriggerDirective } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs-trigger.directive';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ButtonWithIconComponent,
    AlertComponent,
    AvatarComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HlmButtonDirective, HlmIconComponent,
    HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective, HlmAlertTitleDirective,
    HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective,
    SelectScrollablePreviewComponent,
    HlmInputDirective,
    HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective,
    TabsComponent,
  ],
  providers: [
    provideIcons({
      lucideMail, lucideBox, lucideMoveRight, lucideMusic, lucidePenTool, lucideCode2, lucideMegaphone, lucideMonitorPlay, lucideDatabase, lucideStethoscope, lucideBarChart2,
      lucideBriefcase, lucideBookmark, lucideDribbble, lucideStar, lucideQuote, lucideArrowLeft, lucideArrowRight, lucideCircleUser, lucideBuilding2
    })
  ],
  exports: [
    ButtonWithIconComponent,
    AlertComponent,
    AvatarComponent,
    SelectScrollablePreviewComponent,
    InputComponent,
    ButtonComponent,
    TabsComponent
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA,
    // NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
