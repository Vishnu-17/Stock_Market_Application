import { Component,Input, OnInit } from '@angular/core';
import { Company } from '../../models/Company';
import { StockPrice } from '../../models/StockPrice';
import { CompanyService } from '../../services/company.service';
import { StockPriceService } from '../../services/stock-price.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  stockPrice: StockPrice[];
  companies: Company[];
  
  constructor(private stockPriceService:StockPriceService,private companyService:CompanyService,private router:Router) { }

  ngOnInit(): void {
    this.getAllStockPrice();
    this.getAllCompanies();
  }

getAllStockPrice(){
  this.stockPriceService.getAllStockPrice()
      .subscribe(data => 
          this.stockPrice = data
        )
}

getAllCompanies(){
  this.companyService.getAllCompanies()
    .subscribe(data =>
        this.companies = data
      )
}

onDeleteClick(id : any,idx:any){
  this.companyService.deleteCompany(id);
  this.companies.splice(idx,1);
}

editCompany(company :Company){
  window.localStorage.removeItem("editCompanyId");
  window.localStorage.setItem("editCompanyId", company.id!.toString());
  this.router.navigate(['/create-company']);
}

}
