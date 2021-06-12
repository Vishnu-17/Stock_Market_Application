import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {
  ipoId:string;
  isEdit : boolean;
  ipo : IPO = {
    companyName:'',
    stockExchangeName:'',
    price: 0,
    shares:0
  };

  constructor(private ipoService:IpoService) { }

  ngOnInit(): void {
    this.ipoId = window.localStorage.getItem("editIpoId")!
    window.localStorage.removeItem("editIpoId");
    console.log(this.ipoId)
    if(this.ipoId){
      this.isEdit=true;
    this.ipoService.getIpoById(this.ipoId)
    .subscribe(data =>{
      this.ipo = data;
    })
  }
  }

  onClickSubmit(data){
    this.ipoService.createIPO(data);
  }

  onClickUpdate(data){
    this.ipoService.updateIpo(data,this.ipoId)
  //  console.log(data)
    console.log("createipo")
  }

}
