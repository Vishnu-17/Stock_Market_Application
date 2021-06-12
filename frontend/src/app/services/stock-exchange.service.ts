import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/StockExchange';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class StockExchangeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }


  getAllStockExchanges():Observable<StockExchange[]>{
    return this.http.get<StockExchange[]>(this.baseUrl+'/stock-exchange/stock-exchanges');
  }

  createStockExchange(stockExchange :StockExchange){
    const headers = { 'content-type' : 'application/json' }
    const body = JSON.stringify(stockExchange);
    return this.http.post<StockExchange>(this.baseUrl + '/stock-exchange/add/',stockExchange)
      .subscribe(response =>response);
    ;
  }
  deleteStockExchange(id : any){
    this.http.delete(this.baseUrl+'/stock-exchange/'+id)
      .subscribe(response=>{
        console.log(response);
      })
  }

  updateStockExchange(stockExchange:StockExchange,id:any){
    stockExchange.id=id;
    return this.http.put(this.baseUrl+'/stock-exchange/update',stockExchange)
    .subscribe(response=>response)
  }

  getStockExchangeById(id : any){
    return this.http.get(this.baseUrl+'/stock-exchange/'+id)
  }

}
