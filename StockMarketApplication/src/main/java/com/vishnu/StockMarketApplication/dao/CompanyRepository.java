package com.vishnu.StockMarketApplication.dao;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.vishnu.StockMarketApplication.model.Company;
@Repository
public interface CompanyRepository extends MongoRepository<Company, String>{
	@Query("{'name':?0}")
	public List<Company> findByName(String name);

	public List<Company> findByCode(String code);
	
}
