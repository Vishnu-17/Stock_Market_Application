package com.vishnu.StockMarketApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vishnu.StockMarketApplication.dto.CompanyDto;
import com.vishnu.StockMarketApplication.service.CompanyService;

@RestController
@RequestMapping("/company")
@CrossOrigin
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	
	@GetMapping("/companies")
	public ResponseEntity<List<CompanyDto>> getAllCompanies(){
		return ResponseEntity.ok(companyService.getAllCompanies());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CompanyDto> getCompanyById(@PathVariable String id){
		return ResponseEntity.ok(companyService.getCompanyById(id));
	}
	
	@PostMapping("/add")
	public ResponseEntity<CompanyDto> addCompany(@RequestBody CompanyDto companyDto){
		return ResponseEntity.ok(companyService.addCompany(companyDto));
	}
	
	@PutMapping("/update")
	public ResponseEntity<CompanyDto> editCompany(@RequestBody CompanyDto companyDto){
		return ResponseEntity.ok(companyService.updateCompany(companyDto));
	}
	
	@DeleteMapping("/{id}")
	public void deleteCompanyById(@PathVariable String id) {
		companyService.deleteById(id);
	}
}
