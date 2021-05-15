const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Products {
		id: ID!
		name: String!
		price: Int!
		subcategory: String!
		sale: Int!
		image: String
	}

	extend type Query {
		newProducts(categoryId: ID!): [ Products ]
	}

`
