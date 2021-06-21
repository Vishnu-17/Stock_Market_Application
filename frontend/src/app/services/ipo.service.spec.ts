
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IpoService } from './ipo.service';

describe('IpoService', () => {
  let service: IpoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
        providers: [IpoService],
    });
    service = TestBed.inject(IpoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get All the Ipos', () => {
    service.getAllIpos().subscribe(data => {
      expect(data).toHaveSize(1)
    });

    const req = httpMock.expectOne(`http://localhost:8080/ipo/ipos`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.createIPO({
      companyName:"testcompany",
      openDateTime:"Test date",
      price:2500,
      remarks:"test remarks",
      shares:90,
      stockExchangeName:"Test Stock"
    }).subscribe(data => {
        expect(data.companyName).toBe('testcompany');
      });
  
    const req = httpMock.expectOne(
      `http://localhost:8080/ipo/add`
    );
    expect(req.request.method).toBe('POST');
  
    req.flush({
      companyName:"testcompany",
      openDateTime:"Test date",
      price:2500,
      remarks:"test remarks",
      shares:90,
      stockExchangeName:"Test Stock"
    });
  
    httpMock.verify();
  });


});
