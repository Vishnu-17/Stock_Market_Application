import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CompanyService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }


  getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(this.baseUrl+'/company/companies')
  }

  createCompany(company :Company){
    const headers = { 'content-type' : 'application/json' }
    const body = JSON.stringify(company);
    return this.http.post<Company>(this.baseUrl + '/company/add',company)
      .subscribe(response =>response);
    ;
  }

}
