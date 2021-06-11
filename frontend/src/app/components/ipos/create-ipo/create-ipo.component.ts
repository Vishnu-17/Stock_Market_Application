import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {

  ipo : IPO = {
    companyName:'',
    stockExchangeName:'',
    price: 0,
    shares:0
  };

  constructor(private ipoService:IpoService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data){
    this.ipoService.createIPO(data);
  }

}
