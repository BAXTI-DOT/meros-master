const { gql } = require('apollo-server-express')

module.exports = gql`

	type Filters {
		id: ID!
		name: String!
	}

	extend type Query {
		filterDetails(filterID: ID!): [ Filters ]
	}

	extend type Mutation {
		newDetail(title: String! filterID: ID!): Data!
	}
`