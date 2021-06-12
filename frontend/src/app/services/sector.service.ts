import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../models/Sector';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SectorService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  getAllSectors():Observable<Sector[]>{
    return this.http.get<Sector[]>(this.baseUrl+'/sector/sectors')
  }

  createSector(sector :Sector){
    const headers = { 'content-type' : 'application/json' }
    const body = JSON.stringify(sector);
    return this.http.post<Sector>(this.baseUrl + '/sector/add',sector)
      .subscribe(response =>response);
    ;
  }

  deleteSector(id:any){
    this.http.delete(this.baseUrl+'/sector/'+id)
    .subscribe(response=>{
      console.log(response);
    })
  }

  updateSector(sector:Sector,id:any){
    sector.id=id;
    console.log(this.baseUrl+'/sector/update')
    return this.http.put(this.baseUrl+'/sector/update',sector)
    .subscribe(response=>response);
  }

  getSectorById(id:any){
    return this.http.get(this.baseUrl+'/sector/'+id)
  }

}
