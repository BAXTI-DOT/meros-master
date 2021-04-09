const { gql } = require('apollo-server-express')

module.exports = gql`
	
	extend type Query {
		recommended: [ Products ]
	}

	extend type Mutation {
		addRecommendedProduct(productID: ID!): Data
		deleteRecommendedProduct(productID: ID!): Data
	}	
`