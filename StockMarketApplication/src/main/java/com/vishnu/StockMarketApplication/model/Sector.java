package com.vishnu.StockMarketApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
@RequiredArgsConstructor
public class Sector {
	@Id
	private String id;
	private String name;
	private String description;
}
