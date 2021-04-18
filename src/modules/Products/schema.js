const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type AdminProduct {
		id: ID!
		name: String!
	}

	extend type Query {
		products(categoryID: ID! subcategoryID: ID! subclassID: ID!): [ AdminProduct ]
	}
`