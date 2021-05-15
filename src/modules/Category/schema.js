const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Categories {
		id: ID!
		name: String!
		isNavbar: Boolean
		isPopular: Boolean
	}


	extend type Query {
		categories: [ Categories ]
		category(productID: ID!):  Categories
		byCategoryID(categoryID: ID!): Categories
		categoryName(categoryId: ID!): String!
		categoryCount(categoryId: ID!): Int!
	}

	extend type Mutation {
		addCategory(categoryName: String! isNavbar: Boolean isPopular: Boolean): Data
		deleteCategory(categoryID: ID!): Data
		updateCategory(categoryID: ID! categoryName: String! isNavbar: Boolean isPopular: Boolean): Data
	}	

	extend type Subscription {
		categories: [ Categories ]
	}

`
