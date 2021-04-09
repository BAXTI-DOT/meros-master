const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Products {
		id: ID!
		name: String!
		price: Int!
		subcategory: String!
	}

	type Title {
		id: ID!
		name: String!
	}

	extend type Query {
		newProducts(categoryId: ID!): [ Products ]
		newProductTitle(categoryId: ID!): Title!
	}

	extend type Mutation {
		addNewProduct(productID: ID!): Data
		deleteNewProduct(productID: ID!): Data
		addNewTitle(titleName: String! categoryID: ID!): Data
		changeNewTitle(titleName: String! titleID: ID!): Data
		deleteNewTitle(titleID: ID!): Data
	}	

`
