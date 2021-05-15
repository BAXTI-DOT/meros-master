const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Subcategories {
		id: ID!
		name: String!
	}

	type LinkSubcategory {
		id: ID!
		categoryID: ID!
		category: String!
		subcategory: String!
		subcategoryID: ID!
	}

	type Modalsubcategory {
		id: ID!
		name: String!
		subclass: [ SubClasses! ]
	}

	extend type Mutation {
		addSubcategory(subcategoryName: String! categoryID: ID!): Data
		deleteSubcategory(subcategoryID: ID!): Data
	}

	extend type Query {
		subcategories(categoryID: ID!): [ Subcategories ]
		subcategory(categoryID: ID!): [ Subcategories ]
		psubcategory(productID: ID!): Subcategories
		subcategoryName(subcategoryID: ID!): String!
		subcategoryProducts(subcategoryID: ID! sortStatus: Int! page: Int! limit: Int!): [ SubcategoryProducts ]
		subcategoryLink(subcategoryID: ID!):  LinkSubcategory
		modalSubcategory(categoryID: ID!): [ Modalsubcategory! ]
	}

	extend type Subscription {
		subcategory(categoryID: ID!): [ Subcategories ]
	}

`