import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancieComponent } from './vacancie.component';

describe('VacancieComponent', () => {
  let component: VacancieComponent;
  let fixture: ComponentFixture<VacancieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
