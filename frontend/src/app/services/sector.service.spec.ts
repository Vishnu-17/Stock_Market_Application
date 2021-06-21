import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectorService } from './sector.service';

describe('SectorService', () => {
  let service: SectorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
        providers: [SectorService],
    });
    service = TestBed.inject(SectorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get All the Sectors', () => {
    service.getAllSectors().subscribe(data => {
      expect(data).toHaveSize(4)
    });

    const req = httpMock.expectOne(`http://localhost:8080/sector/sectors`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.createSector({
      name:"testsector",
      description:"testdescription"
    }).subscribe(data => {
        expect(data.name).toBe('testsector');
      });
  
    const req = httpMock.expectOne(
      `http://localhost:8080/sector/add`
    );
    expect(req.request.method).toBe('POST');
  
    req.flush({
      name:"testsector",
      description:"testdescription"
    });
  
    httpMock.verify();
  });


  

});
