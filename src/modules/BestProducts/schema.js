const { gql } = require('apollo-server-express')

module.exports = gql`
	
	extend type Query {
		bestProducts: [ Products ]
	}

	extend type Mutation {
		addBestProduct(productID: ID!): Data
		deleteBestProduct(productID: ID!): Data
	}	

`