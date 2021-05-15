const { gql } = require('apollo-server-express')

module.exports = gql`
	type oldFilters {
		id: ID!
		filteredID: ID!
		name: String!
	}

	extend type Query {
		oldDetails(productID: ID!): oldFilters
	}
`