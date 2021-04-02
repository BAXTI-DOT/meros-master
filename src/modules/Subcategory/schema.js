const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Subcategories {
		id: ID!
		name: String!
	}

	extend type Mutation {
		addSubcategory(subcategoryName: String! categoryID: ID!): Data
		deleteSubcategory(subcategoryName: String! categoryID: ID!): Data
	}

	extend type Query {
		subcategories: [ Subcategories ]
		subcategory(categoryID: ID!): [ Subcategories ]
	}

`