package com.vishnu.StockMarketApplication.service;

import java.util.List;

import com.vishnu.StockMarketApplication.dto.StockPriceDto;

public interface StockPriceService {
	public List<StockPriceDto> getAllStockPrices();
	public StockPriceDto addStockPrice(StockPriceDto stockPriceDto);
	public StockPriceDto updateStockPrice(StockPriceDto stockPriceDto);
	public void deleteById(String id);
	public StockPriceDto getStockPriceById(String id);
}
