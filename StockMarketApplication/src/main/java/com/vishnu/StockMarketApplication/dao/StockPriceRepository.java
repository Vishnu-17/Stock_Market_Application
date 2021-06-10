package com.vishnu.StockMarketApplication.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.vishnu.StockMarketApplication.model.StockPrice;

@Repository
public interface StockPriceRepository extends MongoRepository<StockPrice, String>{

}
