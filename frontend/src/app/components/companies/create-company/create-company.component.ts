import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
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
  isAdmin:boolean;
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
 

  constructor(private companyservice:CompanyService,public auth:AuthService) { }

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
  this.auth.user$.subscribe(user=>{
    if(user?.profile=="admin"){
      this.isAdmin = true;
    }
    else{
      this.isAdmin=false;
    }
  }
  //  (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
   );
  }


    onClickSubmit(data){
      this.companyservice.createCompany(data);
    }

    onClickUpdate(data){
      this.companyservice.updateCompany(data,this.companyId)
    }
}
