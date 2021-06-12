import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {
  sectorId:string;
  isEdit:boolean;
  sector:Sector={
    name:'',
    description:''
  };


  constructor(private sectorService : SectorService) { }

  ngOnInit(): void {
    this.sectorId = window.localStorage.getItem("editSectorId")!
    window.localStorage.removeItem("editSectorId");
    console.log(this.sectorId)
    if(this.sectorId){
      this.isEdit=true;
    this.sectorService.getSectorById(this.sectorId)
    .subscribe(data =>{
      this.sector = data;
    })
  }
  }

  onClickSubmit(data){
    this.sectorService.createSector(data);
  }

  onClickUpdate(data){
    this.sectorService.updateSector(data,this.sectorId)
  }
}
