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

import com.vishnu.StockMarketApplication.dto.StockPriceDto;
import com.vishnu.StockMarketApplication.service.StockPriceService;

@RestController
@RequestMapping("/stock-price")
@CrossOrigin
public class StockPriceController {

	@Autowired
	private StockPriceService stockPriceService;
	
	@GetMapping("/stock-prices")
	public ResponseEntity<List<StockPriceDto>> getAllStockPrices(){
		return ResponseEntity.ok(stockPriceService.getAllStockPrices());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<StockPriceDto> getStockPriceById(@PathVariable String id){
		return ResponseEntity.ok(stockPriceService.getStockPriceById(id));
	}
	
	@PostMapping("/add")
	public ResponseEntity<StockPriceDto> addStockPrice(@RequestBody StockPriceDto stockPriceDto){
		return ResponseEntity.ok(stockPriceService.addStockPrice(stockPriceDto));
	}
	
	@PutMapping("/update")
	public ResponseEntity<StockPriceDto> editStockPrice(@RequestBody StockPriceDto stockPriceDto){
		return ResponseEntity.ok(stockPriceService.updateStockPrice(stockPriceDto));
	}
	
	@DeleteMapping("/{id}")
	public void deleteStockPriceById(@PathVariable String id) {
		stockPriceService.deleteById(id);
	}
}
