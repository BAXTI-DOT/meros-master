const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type AdminProduct {
		id: ID!
		name: String!
	}

	type SubcategoryProducts {
		id: ID!
		name: String!
		price: Int!
		category: String!
		sale: Int!
		image: String
	}

	type EditingProduct {
		id: ID!
		name: String!
		price: Int!
		sale: Int!
		amount: Int!
		definition: String!
		isNew: Boolean!
		isSale: Boolean!
		isGift: Boolean!
		isBest: Boolean!
		isRecommended: Boolean!
		category: Categories!
		subcategory: Subcategories!
		subclass: SubClasses!
	}

	type Filtered {
		id: ID!
		name: String!
	}

	extend type Query {
		products(categoryID: ID! subcategoryID: ID! subclassID: ID! page: Int! limit: Int!): [ AdminProduct ]
		countOfProducts(categoryID: ID! subcategoryID: ID! subclassID: ID! limit: Int!): Int!
		editProducts(productID: ID!): EditingProduct
	}

	extend type Mutation {
		createProduct( productID: ID! categoryID: ID! subcategoryID: ID! subclassID: ID! name: String! price: Int! isGift: Boolean isRecommended: Boolean isNew: Boolean isBest: Boolean isSale: Boolean sale: Int amount: Int! definition: String!): Data
		updateProduct(productID: ID! categoryID: ID subcategoryID: ID subclassID: ID name: String price: Int isGift: Boolean isRecommended: Boolean isNew: Boolean isBest: Boolean isSale: Boolean sale: Int amount: Int definition: String): Data
		deleteProduct(productID: ID!): Data!
	}
`