package com.vishnu.StockMarketApplication;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.vishnu.StockMarketApplication.controller.CompanyController;
import com.vishnu.StockMarketApplication.dto.CompanyDto;
import com.vishnu.StockMarketApplication.dto.IpoDto;
import com.vishnu.StockMarketApplication.dto.StockPriceDto;
import com.vishnu.StockMarketApplication.service.CompanyService;
import com.vishnu.StockMarketApplication.service.Impl.CompanyServiceImpl;

@SpringBootTest
class StockMarketApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	void cov() {
		CompanyServiceImpl comp = new CompanyServiceImpl();
		CompanyController con = new CompanyController();
		con.getAllCompanies();
	}
}
