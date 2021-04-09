const { gql } = require('apollo-server-express')

module.exports = gql`
	
	extend type Query {
		getForward: [ Products ]
	}

	extend type Mutation {
		addToForwards(productID: ID!): Data
		deleteFromForward(productID: ID!): Data
	}

	extend type Subscription {
		getForward: [ Products ]
	}
`