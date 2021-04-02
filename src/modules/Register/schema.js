const { gql } = require('apollo-server-express') 

module.exports = gql`
	
	extend type Mutation {
		register(name: String! number: String! password: String!): String
	}
`