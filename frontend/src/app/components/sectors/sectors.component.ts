import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from '../../models/Sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sectors : Sector[];
  constructor(private sectorService:SectorService,private router:Router) { }

  ngOnInit(): void {
    this.getAllSectors()
  }

  getAllSectors(){
    this.sectorService.getAllSectors()
      .subscribe(data=>
        this.sectors = data
      )
  }

  onDeleteClick(id : any,idx:any){
    this.sectorService.deleteSector(id);
    this.sectors.splice(idx,1);
  }
  
  editSector(sector :Sector){
    window.localStorage.removeItem("editSectorId");
    window.localStorage.setItem("editSectorId", sector.id!.toString());
    this.router.navigate(['/create-sector']);
  }
}
