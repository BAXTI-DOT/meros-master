const { gql } = require('apollo-server-express')

module.exports = gql`

	type SubClasses {
		id: ID!
		name: String!
	}
	
	type LinkSubClass {
		id: ID!
		category: String!
		categoryID: ID!
		subcategory: String!
		subcategoryID: ID!
		subclass: String!
		subclassID: ID!
	}
	
	extend type Query {
		subClass(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
		subClasses(subcategoryID: ID!): [ SubClasses ]
		subclasses(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
		subclassName(subclassID: ID!): String!
		subclassLink(subclassID: ID!):  LinkSubClass
		subclassProducts(subclassID: ID! sortStatus: Int! page: Int! limit: Int!): [ Products ]
		psubclass(productID: ID!): SubClasses
	}

	extend type Mutation {
		addSubclass(subclassName: String! subcategoryID: ID! categoryID: ID!): Data
		deleteSubclass(subclassID: ID!): Data
	}

	extend type Subscription {
		subClass(categoryID: ID! subcategoryID: ID!): [ SubClasses ]
	}

`