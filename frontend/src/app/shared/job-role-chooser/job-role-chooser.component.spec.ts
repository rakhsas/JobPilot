import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRoleChooserComponent } from './job-role-chooser.component';

describe('JobRoleChooserComponent', () => {
  let component: JobRoleChooserComponent;
  let fixture: ComponentFixture<JobRoleChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobRoleChooserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobRoleChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
