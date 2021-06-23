import { Component, ElementRef, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
//import { map } from 'rxjs/operators';
import { Company } from '../models/Company';
import { Comparison } from '../models/Comparison';
import { Sector } from '../models/Sector';
import { StockPrice } from '../models/StockPrice';
import { CompanyService } from '../services/company.service';
import { SectorService } from '../services/sector.service';
import { StockPriceService } from '../services/stock-price.service';

@Component({
  selector: 'app-sector-comparison',
  templateUrl: './sector-comparison.component.html',
  styleUrls: ['./sector-comparison.component.css']
})
export class SectorComparisonComponent implements OnInit {
  stockPrices : StockPrice[];
  lineChartData:ChartDataSets[];
  prices:any=[];
  time:any=[];
  stock:StockPrice ;
  chart:any=[];
  chartData:ChartDataSets[];
  chartLabels:Label[];
  chartOptions:ChartOptions;
  comparison: Comparison = {
    code: '',
    stockExchangeName: '',
    fromPeriod: '',
    toPeriod: '',
    periodicity: ''
  }
  sectors:Sector[];
  //comp:Company;
  //public company:Company;
  companies:Company[] = [];
  public type:ChartType;
  constructor(private sectorService:SectorService,private stockPriceService: StockPriceService, private elementRef: ElementRef,private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getSectors()
  }

  getSectors(){
    this.sectorService.getAllSectors()
    .subscribe(data=>{
      this.sectors=data;
    })
  }

  

  onClickSubmit(data){
   

   console.log(data.from);
   var fromd = data.from;
   var tod = data.to;
   fromd =fromd.split("-").reverse().join("-");
   tod = tod.split("-").reverse().join("-");
   console.log(data.stockexchangename)
    
//
    this.sectorService.getSectorCompanies(data.companycode).subscribe(
      data=>{
        if(data){
          this.companies=data
        }
        
      }
    )
//
    console.log(this.companies)
   this.stockPriceService.getCompanyStockPrices(fromd,tod,this.companies[0].code!,data.stockexchangename)
   .subscribe(response=>{
     let prices = response.map(res=>res.price);
    this.time = response.map(res=>res.date);
    console.log(this.time)
 // console.log(this.prices)
 console.log(response)
   console.log(this.time)
   //loading chart data
   this.chartData = [
    {
      data: prices,
      label: data.companycode+" "+data.stockexchangename
    },
  ]

  this.chartLabels = this.time;

  this.chartOptions = {
    responsive: true
  };

 })


  }

  onClickCompare(data){

  }



}
