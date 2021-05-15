const { gql } = require('apollo-server-express') 

module.exports = gql`
	type Order {
		id: ID!
		orderStatus: Boolean!
		orderNumber: Int!
		createdAt: DateTime
	}

	extend type Query {
		getOrder: [ Order ]
		getOrderSum(orderID: ID!): String!
	}

	extend type Mutation {
		submitOrder(orderID: ID!): Data
	}

	extend type Subscription {
		getOrder: [ Order ]
	}
`