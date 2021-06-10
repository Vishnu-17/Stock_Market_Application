package com.vishnu.StockMarketApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StockExchange {
	@Id
	private String id;
	private String name;
	private String description;
	private String address;
	private String remarks;
}
