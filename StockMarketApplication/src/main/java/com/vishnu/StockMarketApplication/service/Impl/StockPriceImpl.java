package com.vishnu.StockMarketApplication.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vishnu.StockMarketApplication.dao.StockPriceRepository;
import com.vishnu.StockMarketApplication.dto.StockPriceDto;
import com.vishnu.StockMarketApplication.mapper.StockPriceMapper;
import com.vishnu.StockMarketApplication.model.StockPrice;
import com.vishnu.StockMarketApplication.service.StockPriceService;
@Service
public class StockPriceImpl implements StockPriceService{
	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	@Autowired
	private StockPriceMapper stockPriceMapper;
	
	
	@Override
	public List<StockPriceDto> getAllStockPrices() {
		return stockPriceMapper.toStockPriceDtos(stockPriceRepository.findAll());
	}
	
	@Override
	public StockPriceDto getStockPriceById(String id) {
		Optional<StockPrice> stockPrice = stockPriceRepository.findById(id);
		if(!stockPrice.isPresent()) {
			return null;
		}
		return stockPriceMapper.toStockPriceDto(stockPrice.get());
	}

	@Override
	public StockPriceDto addStockPrice(StockPriceDto stockPriceDto) {
		StockPrice stockPrice = stockPriceMapper.toStockPrice(stockPriceDto);
		stockPrice = stockPriceRepository.save(stockPrice);
		return stockPriceMapper.toStockPriceDto(stockPrice);
	}

	@Override
	public StockPriceDto updateStockPrice(StockPriceDto stockPriceDto) {
		if(getStockPriceById(stockPriceDto.getId())==null) {
			return null;
		}
		StockPrice stockPrice = stockPriceMapper.toStockPrice(stockPriceDto);
		stockPrice = stockPriceRepository.save(stockPrice);
		return stockPriceMapper.toStockPriceDto(stockPrice);
	}

	@Override
	public void deleteById(String id) {
		stockPriceRepository.deleteById(id);;
	}

	

}
