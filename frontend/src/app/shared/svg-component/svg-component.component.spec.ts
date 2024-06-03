import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg-component.component';

describe('SvgComponentComponent', () => {
  let component: SvgComponent;
  let fixture: ComponentFixture<SvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
