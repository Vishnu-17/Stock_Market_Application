import { Component,Input, OnInit } from '@angular/core';
import { Company } from '../../models/Company';
import { StockPrice } from '../../models/StockPrice';
import { CompanyService } from '../../services/company.service';
import { StockPriceService } from '../../services/stock-price.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  stockPrice: StockPrice[];
  companies: Company[];
  
  constructor(private stockPriceService:StockPriceService,private companyService:CompanyService) { }

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



}
