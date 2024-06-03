import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';
import { withFetch, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet/>
  `, imports: [RouterOutlet, CommonModule, HomeModule, SharedModule, FormsModule],
    // providers: [
    //     provideHttpClient(withInterceptorsFromDi())
    // ]
  })
export class AppComponent {
  title = 'jobpilot';
}
