package com.vishnu.StockMarketApplication.service;

import java.util.List;

import com.vishnu.StockMarketApplication.dto.StockExchangeDto;

public interface StockExchangeService {
	public List<StockExchangeDto> getAllStockExchanges();
	public StockExchangeDto addStockExchange(StockExchangeDto stockExchangeDto);
	public StockExchangeDto updateStockExchange(StockExchangeDto stockExchangeDto);
	public void deleteById(String id);
	public StockExchangeDto getStockExchangeById(String id);
}
