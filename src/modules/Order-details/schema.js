const { gql } = require('apollo-server-express')

module.exports = gql`
	type OrderDetail {
		id: ID!
		productID: ID!
		productName: String!
		productCount: Int!
		productPrice: Int!
		productImage: String!
	}

	extend type Query {
		orderDetails(orderID: ID!): [OrderDetail!]
	}
`