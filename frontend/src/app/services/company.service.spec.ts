import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyService } from './company.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock: HttpTestingController;

  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule],
        providers: [CompanyService],
      });
      // inject the service
    service = TestBed.inject(CompanyService);
    httpMock = TestBed.inject(HttpTestingController);
    });

    
    it('should get All the companies', () => {
      service.getAllCompanies().subscribe(data => {
        expect(data).toHaveSize(4)
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/company/companies`);
      expect(req.request.method).toBe('GET');
      httpMock.verify();
    });

    it('should get Company By Name', () => {
      service.getCompanyByName('Apollo Hospitals').subscribe(data => {
        expect(data).toHaveSize(1)
      });  
      const req = httpMock.expectOne(`http://localhost:8080/company/name/Apollo Hospitals`);
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Apollo Hospitals'
      });
      httpMock.verify();
    });

    it('should post the correct data', () => {
      service.createCompany({
        name:'testComp',
        boardOfDirectors:'test',
        ceo:'testceo',
        code:"890",
        description:"testdescription",
        sectorName:'Finance',
        stockExchangeNames:"BSE",
        turnover:"120,000"
      }).subscribe(data => {
          expect(data.name).toBe('testComp');
        });
    
      const req = httpMock.expectOne(
        `http://localhost:8080/company/add`
      );
      expect(req.request.method).toBe('POST');
    
      req.flush({
        name:'testComp',
        boardOfDirectors:'test',
        ceo:'testceo',
        code:"890",
        description:"testdescription",
        sectorName:'Finance',
        stockExchangeNames:"BSE",
        turnover:"120,000"
      });
    
      httpMock.verify();
    });
  
});


