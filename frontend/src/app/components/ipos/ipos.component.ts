import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {
  ipos :IPO[];
  constructor(private ipoService : IpoService) { }

  ngOnInit(): void {
    this.getAllIPOs()
  }

  getAllIPOs(){
    this.ipoService.getAllIpos()
      .subscribe(data=>
        this.ipos = data
        )
  }

}
