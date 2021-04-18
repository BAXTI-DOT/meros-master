const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Subcategories {
		id: ID!
		name: String!
	}

	type SubClasses {
		id: ID!
		name: String!
	}

	type LinkSubcategory {
		id: ID!
		category: String!
		subcategory: String!
	}

	type SubcategoryProducts {
		id: ID!
		name: String!
		price: Int!
		category: String!
	}

	extend type Mutation {
		addSubcategory(subcategoryName: String! categoryID: ID!): Data
		deleteSubcategory(subcategoryID: ID!): Data
	}

	extend type Query {
		subcategories(categoryID: ID!): [ Subcategories ]
		subcategory(categoryID: ID!): [ Subcategories ]
		subcategoryName(subcategoryID: ID!): String!
		subClasses(subcategoryID: ID!): [ SubClasses ]
		subcategoryProducts(subcategoryID: ID! sortStatus: Int! page: Int! limit: Int!): [ SubcategoryProducts ]
		subcategoryLink(subcategoryID: ID!):  LinkSubcategory
	}

	extend type Subscription {
		subcategory(categoryID: ID!): [ Subcategories ]
	}

`