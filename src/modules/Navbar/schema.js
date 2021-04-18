const { gql } = require('apollo-server-express')

module.exports = gql`
	extend type Query {
		navbar: [ Categories ]
	}

	extend type Mutation {
		addToNavbar(categoryID: ID!): Data
		deleteFromNavbar(categoryID: ID!): Data
	}

	extend type Subscription {
		navbar: [ Categories ]
	}
`