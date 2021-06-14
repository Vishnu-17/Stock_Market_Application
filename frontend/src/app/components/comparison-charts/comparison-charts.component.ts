import { Component, OnInit,ElementRef } from '@angular/core';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { Chart, ChartDataSets, ChartHoverOptions, ChartOptions } from 'chart.js';
import { Color,Label } from 'ng2-charts';
import { StockPrice } from 'src/app/models/StockPrice';
import { Comparison } from 'src/app/models/Comparison';
//import { ChartDataSets } from 'chart.js';
//import * as CanvasJS from 'canvasjs';
@Component({
  selector: 'app-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  styleUrls: ['./comparison-charts.component.css']
})
export class ComparisonChartsComponent implements OnInit {
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
  constructor(private stockPriceService: StockPriceService, private elementRef: ElementRef) { }

 
  ngOnInit(): void {
   // this.getAllStockPrices()
    //this.getStock()
   //console.log(this.stockPrices)
  // this.stock=this.stockPrices[0];

 //console.log(this.stockPrices)
    //console.log(prices)

  }

    onClickSubmit(data){
      console.log(data.from);
      var fromd = data.from;
      var tod = data.to;
      fromd =fromd.split("-").reverse().join("-");
      tod = tod.split("-").reverse().join("-");
      console.log(data.stockexchangename)
      this.stockPriceService.getCompanyStockPrices(fromd,tod,data.companycode,data.stockexchangename)
      .subscribe(response=>{
        let prices = response.map(res=>res.price);
       this.time = response.map(res=>res.time);
    // console.log(this.prices)
    console.log(response)
      console.log(this.time)
      //loading chart data
      this.chartData = [
        {
          data: prices,
          label: data.companycode
        },
      ]

      this.chartLabels = this.time;

      this.chartOptions = {
        responsive: true
      };

    })
    }



  getAllStockPrices(){
    this.stockPriceService.getAllStockPrice()
    .subscribe(response=>{
        this.prices = response.map(res=>res.price);
      this.time = response.map(res=>res.time);
    // console.log(this.prices)
      //console.log(time)
      //loading chart data
      this.chartData = [
        {
          data: this.prices,
          label: 'Stock A'
        },
      ]

      this.chartLabels = this.time;

      this.chartOptions = {
        responsive: true
      };

    })
    
   //   )
 // }

  /*
getStock(){
 for(let stocks in this.stockPrices){
   console.log(stocks)
 }
} 
 
lineChartData: ChartDataSets[] = [
  { data: this.prices , label: 'Stock prices' },
];

lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

lineChartOptions = {
  responsive: true,
};

lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,0,0.28)',
  },
];

lineChartLegend = true;
lineChartPlugins = [];
lineChartType : ChartType= "line";

  */

  }

}
