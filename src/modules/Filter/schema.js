const { gql } = require('apollo-server-express')

module.exports = gql`

	type Filter {
		id: ID!
		name: String!
		detail: [ Filters]
	}

	extend type Query {
		filters(subcategoryID: ID!): [ Filter ]
	}
`