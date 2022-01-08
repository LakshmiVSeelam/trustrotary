import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseSectionComponent } from './cause-section.component';

describe('CauseSectionComponent', () => {
  let component: CauseSectionComponent;
  let fixture: ComponentFixture<CauseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauseSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
