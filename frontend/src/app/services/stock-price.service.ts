import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { StockPrice } from '../models/StockPrice';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class StockPriceService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) {

   }


   getAllStockPrice():Observable<StockPrice[]>{
     return this.http.get<StockPrice[]>(this.baseUrl+'/stock-price/stock-prices')
   }



  
  createStockPrice(stockPrice : StockPrice){
    const headers = { 'content-type' : 'application/json' }
    const body = JSON.stringify(stockPrice);
    return this.http.post<StockPrice>(this.baseUrl + '/stock-price/add',stockPrice)
      .subscribe(response =>response);
    ;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}

}
