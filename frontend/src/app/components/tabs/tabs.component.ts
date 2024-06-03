import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { HlmButtonDirective } from '../../../../components/ui-button-helm/src/lib/hlm-button.directive';
import { HlmInputDirective } from '../../../../components/ui-input-helm/src/lib/hlm-input.directive';
import { HlmCardContentDirective, HlmCardDescriptionDirective, HlmCardDirective, HlmCardFooterDirective, HlmCardHeaderDirective, HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { SharedModule } from '../../shared/shared.module';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'Spartan-tabs',
	standalone: true,
	imports: [
		HlmTabsComponent,
		HlmTabsListComponent,
		HlmTabsTriggerDirective,
		HlmTabsContentDirective,

		HlmCardContentDirective,
		HlmCardDescriptionDirective,
		HlmCardDirective,
		HlmCardFooterDirective,
		HlmCardHeaderDirective,
		HlmCardTitleDirective,
		HlmLabelDirective,
		HlmInputDirective,
		HlmButtonDirective,
		HlmIconModule,
        SharedModule,
	],
	template: `
		<hlm-tabs tab="Candidate" class="w-full">
            <hlm-tabs-list class="w-full flex flex-col gap-2 p-2 h-auto" aria-label="tabs example">
                <div class="spartan-tabs-list-header">
                    <span class="text-xs font-normal uppercase">create account as</span>
                </div>
                <div class="spartan-tabs-buttons grid grid-cols-2 w-full">
                    <button hlmTabsTrigger="Candidate">
                        <hlm-icon size="base" class="mr-2" name="lucideCircleUser" />
                        Candidate
                    </button>
                    <button hlmTabsTrigger="Employers">
                        <hlm-icon size="base" class="mr-2" name="lucideBuilding2" />
                        Employers
                    </button>
                </div>
            </hlm-tabs-list>
            <div hlmTabsContent="Candidate">
                <section hlmCard>
                    <div hlmCardHeader class="flex flex-col gap-2">
                        <div class="nameInfos grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <button hlmBtn class="bg-white hover:bg-white border border-main-gray-200 text-main-gray-500 text-sm font-normal flex gap-2">
                                <svg-component src="assets/social/google.svg"/>
                                Sign up with LinkedIn
                            </button>
                            <button hlmBtn class="bg-white hover:bg-white border border-main-gray-200 text-main-gray-500 text-sm font-normal flex gap-2">
                                <svg-component src="assets/social/linkedin.svg"/>
                                Sign up with Google
                            </button>
                        </div>
                        <span class="text-main-gray-500 text-center font-normal text-sm" hlmCardTitle>Or</span >
                    </div>
                    <div class="w-full flex flex-col gap-2" hlmCardContent>
                        <div class="nameInfos  grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <input class="mt-1.5 w-full" placeholder="Full Name" hlmInput />
                            <input class="mt-1.5 w-full" placeholder="Username" hlmInput />
                        </div>
                        <div class="email">
                            <input class="mt-1.5 w-full" placeholder="Email Address" hlmInput />
                        </div>
                        <div class="password flex flex-col gap-2">
                            <input class="mt-1.5 w-full" placeholder="Password" hlmInput />
                            <input class="mt-1.5 w-full" placeholder="Confirm Password" hlmInput />
                        </div>
                    </div>
                    <div hlmCardFooter>
                        <button hlmBtn class="bg-main-blue-100 hover:bg-white hover:text-main-blue-100 hover:border hover:border-main-gray-200">
                            Create Account
                            <hlm-icon size="base" class="ml-2" name="lucideArrowRight"  />
                        </button>
                    </div>
                </section>
            </div>
            <div hlmTabsContent="Employers">
                <section hlmCard>
                    <div hlmCardHeader>
                        <div class="nameInfos  grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <button hlmBtn class="bg-white hover:bg-white border border-main-gray-200 text-main-gray-500 text-sm font-normal flex gap-2">
                                <svg-component src="assets/social/google.svg"/>
                                Sign up with LinkedIn
                            </button>
                            <button hlmBtn class="bg-white hover:bg-white border border-main-gray-200 text-main-gray-500 text-sm font-normal flex gap-2">
                                <svg-component src="assets/social/linkedin.svg"/>
                                Sign up with Google
                            </button>
                        </div>
                        <span class="text-main-gray-500 text-center font-normal text-sm" hlmCardTitle>Or</span >
                    </div>
                    <div class="w-full flex flex-col gap-2" hlmCardContent>
                        <div class="nameInfos">
                            <input class="mt-1.5 w-full" placeholder="Company Name" hlmInput />
                        </div>
                        <div class="email">
                            <input class="mt-1.5 w-full" placeholder="Email Address" hlmInput />
                        </div>
                        <div class="password grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <input class="mt-1.5 w-full" placeholder="Password" hlmInput type="password" />
                            <input class="mt-1.5 w-full" placeholder="Confirm Password" hlmInput type="password" />
                        </div>
                    </div>
                    <div hlmCardFooter>
                        <button hlmBtn class="bg-main-blue-100 hover:bg-white hover:text-main-blue-100 hover:border hover:border-main-gray-200">
                            Create Account
                            <hlm-icon size="base" class="ml-2" name="lucideArrowRight"  />
                        </button>
                    </div>
                </section>
            </div>
        </hlm-tabs>
  `,
	styleUrl: './tabs.component.css'
})
export class TabsComponent {
}


