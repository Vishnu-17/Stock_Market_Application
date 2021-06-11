import { Component, OnInit } from '@angular/core';
import { Sector } from '../../models/Sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sectors : Sector[];
  constructor(private sectorService:SectorService) { }

  ngOnInit(): void {
    this.getAllSectors()
  }

  getAllSectors(){
    this.sectorService.getAllSectors()
      .subscribe(data=>
        this.sectors = data
      )
  }
}
