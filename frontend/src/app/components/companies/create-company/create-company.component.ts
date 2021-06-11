import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

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
  }

    onClickSubmit(data){
      this.companyservice.createCompany(data);
    }
}
