const { gql } = require('apollo-server-express') 

module.exports = gql`

	extend type Query {
		demo: String!
	}
	
	extend type Mutation {
		login(number: String! password: String!): String!
		adminLogin(username: String! password: String!): String!
	}
`