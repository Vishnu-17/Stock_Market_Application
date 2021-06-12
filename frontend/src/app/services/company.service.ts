import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CompanyService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient,private router:Router) { }


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

  deleteCompany(id : any){
    this.http.delete(this.baseUrl+'/company/'+id)
      .subscribe(response=>{
        console.log(response);
      })
  }

  updateCompany(company:Company,id:any){
    company.id=id;
    return this.http.put(this.baseUrl+'/company/update',company)
    .subscribe(response=>response)
  }

  getCompanyById(id : any){
    return this.http.get(this.baseUrl+'/company/'+id)
  }
}
