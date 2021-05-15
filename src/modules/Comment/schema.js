const { gql } = require('apollo-server-express') 

module.exports = gql`

	type Comments {
		id: ID!
		body: String!
		rate: Int!
		tovarId: ID!
	}

	type UserCommments {
		id: ID!
		userName: String!
		rate: Int!
		body: String!
		createdTime: DateTime
	}

	type StarRate {
		count: Int!
	}

	extend type Query {
		comments: [ Comments! ]
		byProductID(productID: ID! page: Number limit: Number): [ UserCommments ]
		countComments(limit: Number! productID: ID!): Int!
		firstCount(productID: ID!): StarRate
		secondCount(productID: ID!): StarRate
		thirdCount(productID: ID!): StarRate
		fourthCount(productID: ID!): StarRate
		fifthCount(productID: ID!): StarRate
		allCount(productID: ID!): StarRate
	}

	extend type Subscription {
		byProductID(productID: ID! page: Number limit: Number): [ UserCommments ]
	}

	extend type Mutation {
		createComment(body: String! rate: Int! productID: ID!): Data
	}
`