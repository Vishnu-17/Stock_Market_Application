package com.vishnu.StockMarketApplication.service;

import java.util.List;

import com.vishnu.StockMarketApplication.dto.IpoDto;

public interface IpoService {
	public List<IpoDto> getAllIpos();
	public IpoDto addIpo(IpoDto ipoDto);
	public IpoDto updateIpo(IpoDto ipoDto,String id);
	public void deleteById(String id);
	public IpoDto getIpoById(String id);
}
