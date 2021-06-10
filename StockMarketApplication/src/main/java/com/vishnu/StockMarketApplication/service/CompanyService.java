package com.vishnu.StockMarketApplication.service;

import java.util.List;

import com.vishnu.StockMarketApplication.dto.CompanyDto;

public interface CompanyService {
	public List<CompanyDto> getAllCompanies();
	public CompanyDto addCompany(CompanyDto companyDto);
	public CompanyDto updateCompany(CompanyDto companyDto);
	public void deleteById(String id);
	public CompanyDto getCompanyById(String id);
}
