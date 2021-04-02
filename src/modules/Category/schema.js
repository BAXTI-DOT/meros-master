const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Categories {
		id: ID!
		name: String!
	}

	type Products {
		id: ID!
		name: String!
		price: Int!
		subcategoryName: String!
	}

	type Title {
		id: ID!
		name: String!
	}

	extend type Query {
		categories: [ Categories ]
		category(categoryId: ID!):  Categories
		categoryName(categoryId: ID!): String!
		categoryCount(categoryId: ID!): Int!
		newProducts(categoryId: ID!): [ Products ]
		giftProducts(categoryId: ID!): [ Products ]
		newProductTitle(categoryId: ID!): Title!
		giftProductTitle(categoryId: ID!): Title!
	}

	extend type Mutation {
		addCategory(categoryName: String!): Data
		deleteCategory(categoryID: ID!): Data
		addNewProduct(productID: ID!): Data
		addGiftProduct(productID: ID!): Data
		deleteNewProduct(productID: ID!): Data
		deleteGiftProduct(productID: ID!): Data
	}	

`
