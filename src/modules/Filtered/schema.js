const { gql } = require('apollo-server-express')

module.exports = gql`
	extend type Mutation {
		addFiltered(productID: ID! filterID: ID!): Data
	}
`