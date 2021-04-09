const { gql } = require('apollo-server-express')

module.exports = gql`
	
	extend type Query {
		giftProducts(categoryId: ID!): [ Products ]
		giftProductTitle(categoryId: ID!): Title!
	}

	extend type Mutation {
		addGiftProduct(productID: ID!): Data
		deleteGiftProduct(productID: ID!): Data
		addGiftTitle(titleName: String! categoryID: ID!): Data
		changeGiftTitle(titleName: String! titleID: ID!): Data
		deleteGiftTitle(titleID: ID!): Data
	}	

`
