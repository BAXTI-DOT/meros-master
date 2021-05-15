const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type SingleProduct {
		id: ID!
		name: String!
		price: Int!
		definition: String!
		image: String!
		details: [ ProductDetail! ]
	}

	extend type Query {
		singleProduct(productID: ID!): SingleProduct!
		singleProductLink(productID: ID!): LinkSubClass!
	}
`