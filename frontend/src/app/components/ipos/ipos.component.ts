import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {
  ipos :IPO[];
  constructor(private ipoService : IpoService,private router:Router) { }

  ngOnInit(): void {
    this.getAllIPOs()
  }

  getAllIPOs(){
    this.ipoService.getAllIpos()
      .subscribe(data=>
        this.ipos = data
        )
  }

  onDeleteClick(id : any,idx:any){
    this.ipoService.deleteIpo(id);
    this.ipos.splice(idx,1);
  }
  
  editIpo(ipo :IPO){
    window.localStorage.removeItem("editIpoId");
    window.localStorage.setItem("editIpoId", ipo.id!.toString());
    this.router.navigate(['/create-ipo']);
  }


}
