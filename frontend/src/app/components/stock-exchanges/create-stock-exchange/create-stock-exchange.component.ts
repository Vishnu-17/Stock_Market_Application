import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  stockexchange:StockExchange={
    name:'',
    description:'',
    address:'',
    remarks:''
  }
  constructor(private stockExchangeService : StockExchangeService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data){
    this.stockExchangeService.createStockExchange(data)
  }
}
