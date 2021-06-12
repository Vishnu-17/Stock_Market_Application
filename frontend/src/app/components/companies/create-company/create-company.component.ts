import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  //let ompanyId = window.localStorage.getItem("editCompanyId");
  companyId : string;
  isEdit:boolean;
  company: Company = {
    name: '',
    code: '',
    turnover: '',
    ceo: '',
    boardOfDirectors: '',
    stockExchangeNames: '',
    sectorName: '',
    description: ''
  };
 

  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
    this.companyId = window.localStorage.getItem("editCompanyId")!
    window.localStorage.removeItem("editCompanyId");
    console.log(this.companyId)
    if(this.companyId){
      this.isEdit=true;
    this.companyservice.getCompanyById(this.companyId)
    .subscribe(data =>{
      this.company = data;
    })
  }
  }


    onClickSubmit(data){
      this.companyservice.createCompany(data);
    }

    onClickUpdate(data){
      this.companyservice.updateCompany(data,this.companyId)
    }
}
