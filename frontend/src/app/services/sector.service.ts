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
}
