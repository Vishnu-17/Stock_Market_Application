import { TestBed } from '@angular/core/testing';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StockPriceService } from './stock-price.service';

describe('StockPriceService', () => {
  let service: StockPriceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [StockPriceService],
    });
    service = TestBed.inject(StockPriceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get All the StockPrices', () => {
    service.getAllStockPrice().subscribe(data => {
      expect(data).toHaveSize(18)
    });

    const req = httpMock.expectOne(`http://localhost:8080/stock-price/stock-prices`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.createStockPrice({
      companyCode:"345",
      date:"test date",
      price:120,
      stockExchangeName:"testexchange",
      time:"test time"
    }).subscribe(data => {
        expect(data.companyCode).toBe('345');
      });
  
    const req = httpMock.expectOne(
      `http://localhost:8080/stock-price/add`
    );
    expect(req.request.method).toBe('POST');
  
    req.flush({
      companyCode:"345",
      date:"test date",
      price:120,
      stockExchangeName:"testexchange",
      time:"test time"
    });
  
    httpMock.verify();
  });


});
