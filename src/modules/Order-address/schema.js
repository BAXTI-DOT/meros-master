const { gql } = require('apollo-server-express')

module.exports = gql`
	type OrderInfo {
		state: ID!
		region: ID!
		address: String!
		fullName: String!
		phone: String!
	}

	extend type Query {
		orderAddress(orderID: ID!): OrderInfo!
	}
`