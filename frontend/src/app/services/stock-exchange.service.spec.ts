import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StockExchangeService } from './stock-exchange.service';

describe('StockExchangeService', () => {
  let service: StockExchangeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [StockExchangeService],
    });
    service = TestBed.inject(StockExchangeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get All the StockExchanges', () => {
    service.getAllStockExchanges().subscribe(data => {
      expect(data).toHaveSize(2)
    });

    const req = httpMock.expectOne(`http://localhost:8080/stock-exchange/stock-exchanges`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.createStockExchange({
      name:"teststock",
      address:"testaddress",
      description:"testdescription",
      remarks:"testremarks"
    }).subscribe(data => {
        expect(data.name).toBe('teststock');
      });
  
    const req = httpMock.expectOne(
      `http://localhost:8080/stock-exchange/add/`
    );
    expect(req.request.method).toBe('POST');
  
    req.flush({
      name:"teststock",
      address:"testaddress",
      description:"testdescription",
      remarks:"testremarks"
    });
  
    httpMock.verify();
  });
  
});
