const { gql } = require('apollo-server-express')

module.exports = gql`

	type Filter {
		id: ID!
		name: String!
		oldDetail: oldFilters
		detail: [ Filters]
	}

	extend type Query {
		filters(subcategoryID: ID!): [ Filter ]
		editFilters(productID: ID!): [ Filter ]
	}
`