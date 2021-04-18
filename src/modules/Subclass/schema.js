const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type LinkSubClass {
		id: ID!
		category: String!
		subcategory: String!
		subclass: String!
	}
	
	extend type Query {
		subClass(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
		subclasses(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
		subclassName(subclassID: ID!): String!
		subclassLink(subclassID: ID!):  LinkSubClass
		subclassProducts(subclassID: ID! sortStatus: Int! page: Int! limit: Int!): [ Products ]
	}

	extend type Mutation {
		addSubclass(subclassName: String! subcategoryID: ID! categoryID: ID!): Data
		deleteSubclass(subclassID: ID!): Data
	}

	extend type Subscription {
		subClass(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
	}

`