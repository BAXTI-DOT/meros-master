const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type ProductDetail {
		title: String!
		name: String!
	}

	extend type Query {
		productDetail(productID: ID!): [ ProductDetail! ]
	}
`