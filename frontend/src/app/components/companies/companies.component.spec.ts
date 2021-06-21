import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { CompaniesComponent } from './companies.component';
import { RouterTestingModule } from '@angular/router/testing';
import{HttpClient,HttpHandler} from '@angular/common/http';
import { CompanyService } from 'src/app/services/company.service';
import { AuthService } from '@auth0/auth0-angular';

describe('CompaniesComponent', () => {
  let component: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CompaniesComponent  ],
      providers:[StockPriceService,HttpClient,HttpHandler,CompanyService,{provide:AuthService,useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  
});
