import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyComponent } from './create-company.component';

describe('CreateCompanyComponent', () => {
  let component: CreateCompanyComponent;
  let fixture: ComponentFixture<CreateCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
