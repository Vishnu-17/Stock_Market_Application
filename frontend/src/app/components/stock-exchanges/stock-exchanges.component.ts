import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from '../../models/StockExchange';
import { StockExchangeService } from '../../services/stock-exchange.service';

@Component({
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.css']
})
export class StockExchangesComponent implements OnInit {
  stockExchanges : StockExchange[];
  constructor(private stockExchangeService:StockExchangeService,private router:Router) { }

  ngOnInit(): void {
    this.getAllStockExchanges()
  }

  getAllStockExchanges(){
    this.stockExchangeService.getAllStockExchanges()
      .subscribe(data=>
        this.stockExchanges = data  
      )
  }
  onDeleteClick(id : any,idx:any){
    this.stockExchangeService.deleteStockExchange(id);
    this.stockExchanges.splice(idx,1);
  }
  
  editStockExchange(stockExchange :StockExchange){
    window.localStorage.removeItem("editStockExchangeId");
    window.localStorage.setItem("editStockExchangeId", stockExchange.id!.toString());
    this.router.navigate(['/create-stock-exchange']);
  }

}
