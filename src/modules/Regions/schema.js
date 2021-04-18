const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Regions {
		id: ID!
		name: String!
	}

	extend type Query {
		allRegions: [ Regions ]
		byStateID(stateID: ID!): [ Regions ]
		byRegionID(regionID: ID!): Regions
	}

	extend type Mutation {
		addRegion(regionName: String! stateID: ID!): Data
		updateRegion(regionID: ID! regionName: String!): Data
		deleteRegion(regionID: ID!): Data
	}
`