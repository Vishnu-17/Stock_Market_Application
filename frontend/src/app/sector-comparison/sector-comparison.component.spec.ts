import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorComparisonComponent } from './sector-comparison.component';

describe('SectorComparisonComponent', () => {
  let component: SectorComparisonComponent;
  let fixture: ComponentFixture<SectorComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
