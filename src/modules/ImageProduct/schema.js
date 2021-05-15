const { gql } = require('apollo-server-express')

module.exports = gql`
	input ImageData {
		id: ID!
		name: String!
		path: String!
		mimetype: String!
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