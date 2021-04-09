const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Categories {
		id: ID!
		name: String!
	}

	extend type Query {
		categories: [ Categories ]
		category(categoryId: ID!):  Categories
		categoryName(categoryId: ID!): String!
		categoryCount(categoryId: ID!): Int!
	}

	extend type Mutation {
		addCategory(categoryName: String!): Data
		deleteCategory(categoryID: ID!): Data
	}	

`
