import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { VacancieComponent } from './vacancie/vacancie.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HlmIconComponent, HlmIconModule } from "../../../components/ui-icon-helm/src/index";
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { CompaniesComponent } from './companies/companies.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { JobRoleChooserComponent } from './job-role-chooser/job-role-chooser.component';
import { FooterComponent } from './footer/footer.component';
import { SvgComponent } from './svg-component/svg-component.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideArrowRight, lucideBarChart2, lucideBookmark, lucideBriefcase, lucideBuilding2, lucideCircleUser, lucideCode2, lucideDatabase, lucideDribbble, lucideMegaphone, lucideMonitorPlay, lucideMoveRight, lucideMusic, lucidePenTool, lucideQuote, lucideStar, lucideStethoscope } from '@ng-icons/lucide';
import { RouterModule } from '@angular/router';
@NgModule({ declarations: [
        HeaderComponent,
        BodyComponent,
        VacancieComponent,
        HowItWorksComponent,
        CategoriesComponent,
        FeaturedComponent,
        CompaniesComponent,
        TestimonialComponent,
        JobRoleChooserComponent,
        FooterComponent,
        SvgComponent
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
        SvgComponent,
        FooterComponent,
        JobRoleChooserComponent,
        TestimonialComponent,
        CompaniesComponent,
        FeaturedComponent,
        CategoriesComponent,
        HowItWorksComponent,
        VacancieComponent
    ], imports: [CommonModule,
        ComponentsModule,
        NgxCountriesDropdownModule,
        HlmIconModule,
        RouterModule], providers: [
        provideIcons({
            lucideMoveRight, lucideDribbble, lucideStar, lucideArrowRight, lucideMusic, lucidePenTool, lucideCode2, lucideMegaphone, lucideMonitorPlay, lucideDatabase, lucideStethoscope, lucideBarChart2,
            lucideBriefcase, lucideBookmark, lucideQuote, lucideArrowLeft, lucideCircleUser, lucideBuilding2
        }),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class SharedModule { }
