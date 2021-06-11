import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPO } from '../models/IPO';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class IpoService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  getAllIpos():Observable<IPO[]>{
    return this.http.get<IPO[]>(this.baseUrl+'/ipo/ipos')
  }

  createIPO(ipo :IPO){
    const headers = { 'content-type' : 'application/json' }
    const body = JSON.stringify(ipo);
    return this.http.post<IPO>(this.baseUrl + '/ipo/add',ipo)
      .subscribe(response =>response);
    ;
  }
}
