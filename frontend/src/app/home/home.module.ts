import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [
        HomeComponent,
    ], imports: [CommonModule,
        HomeRoutingModule,
        SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class HomeModule { }
