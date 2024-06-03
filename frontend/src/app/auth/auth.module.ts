import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { AuthRoutingModule } from './auth.routing';
import { ComponentsModule } from "../components/components.module";
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HlmTabsComponent } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs.component';
import { HlmTabsListComponent } from '../../../components/ui-tabs-helm/src/lib/hlm-tabs-list.component';
import { HlmTabsContentDirective, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ResetComponent,
        EmailVerificationComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        RouterModule,
        ComponentsModule,
        NgOtpInputModule,
        HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective,
        SharedModule,
        FormsModule
    ],
    exports: [
        RegisterComponent,
        LoginComponent,
        ResetComponent,
        EmailVerificationComponent,
        ForgotPasswordComponent,

    ],
    providers: [
        AuthService,
        // JwtHelperService
    ]
})
export class AuthModule { }
