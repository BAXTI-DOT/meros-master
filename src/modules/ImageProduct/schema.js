const { gql } = require('apollo-server-express')

module.exports = gql`
	input ImageData {
		id: ID!
		url: String!
	}

	type Image {
		id: ID!
		url: String!
	}

	extend type Query {
		getImage(productID: ID!): Image!
	}

	extend type Mutation {
		insertImage(input: ImageData!): Data
		updateImage(input: ImageData!): Data
	}
`