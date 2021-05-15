const { gql } = require('apollo-server-express')

module.exports = gql`
	type User {
		id: ID!
		name: String!
		number: String!
	}

	extend type Query {
		orderUsers(orderID: ID!): User!
	}
`