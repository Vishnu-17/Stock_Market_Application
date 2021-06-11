package com.vishnu.StockMarketApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.vishnu.StockMarketApplication.dto.StockExchangeDto;
import com.vishnu.StockMarketApplication.service.StockExchangeService;

@RestController
@RequestMapping("/stock-exchange")
@CrossOrigin(origins = "http://localhost:4200")
public class StockExchangeController {

	@Autowired
	private StockExchangeService stockExchangeService;
	
	@GetMapping("/stock-exchanges")
	public ResponseEntity<List<StockExchangeDto>> getAllStockExchanges(){
		return ResponseEntity.ok(stockExchangeService.getAllStockExchanges());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<StockExchangeDto> getStockExchangeById(@PathVariable String id){
		return ResponseEntity.ok(stockExchangeService.getStockExchangeById(id));
	}
	
	@PostMapping("/add")
	public ResponseEntity<StockExchangeDto> addStockExchange(@RequestBody StockExchangeDto stockExchangeDto){
		return ResponseEntity.ok(stockExchangeService.addStockExchange(stockExchangeDto));
	}
	
	@PutMapping("/update")
	public ResponseEntity<StockExchangeDto> editStockExchange(@RequestBody StockExchangeDto stockExchangeDto){
		return ResponseEntity.ok(stockExchangeService.updateStockExchange(stockExchangeDto));
	}
	
	@DeleteMapping("/{id}")
	public void deleteStockExchangeById(@PathVariable String id) {
		stockExchangeService.deleteById(id);
	}
}
