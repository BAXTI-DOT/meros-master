const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type PersonalData {
		id: ID!
		name: String!
		image: String
	}

	extend type Query {
		cabinet: PersonalData!
	}
`