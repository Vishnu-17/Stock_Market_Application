import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {
  stockExchangeId:string;
  isEdit : boolean;
  stockexchange:StockExchange={
    name:'',
    description:'',
    address:'',
    remarks:''
  }
  constructor(private stockExchangeService : StockExchangeService) { }

  ngOnInit(): void {
    this.stockExchangeId = window.localStorage.getItem("editStockExchangeId")!
    window.localStorage.removeItem("editStockExchangeId");
    console.log(this.stockExchangeId)
    if(this.stockExchangeId){
      this.isEdit=true;
    this.stockExchangeService.getStockExchangeById(this.stockExchangeId)
    .subscribe(data =>{
      this.stockexchange = data;
    })
  }
  }

  onClickSubmit(data){
    this.stockExchangeService.createStockExchange(data)
  }

  onClickUpdate(data){
    this.stockExchangeService.updateStockExchange(data,this.stockExchangeId)
  }
}
