const { gql } = require('apollo-server-express')

module.exports = gql`

	type States {
		id: ID!
		name: String!
	}
	
	extend type Query {
		allStates: [ States ]
		stateById(stateID: ID!): States
	}

	extend type Mutation {
		addState(stateName: String!): Data
		updateState(stateID: ID! stateName: String!): Data
		deleteState(stateID: ID!): Data
	}
`