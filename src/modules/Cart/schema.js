const { gql } = require('apollo-server-express')

module.exports = gql`

	type Cart {
		id: ID!
		name: String!
		price: Int!
		count: Int!
		subcategory: String!
	}
	
	extend type Query {
		getCartProducts: [ Cart ]
	}

	extend type Mutation {
		deleteFromCart(productID: ID!): Data
		addToCart(productID: ID! productCount: Int!): Data
	}

	extend type Subscription {
		getCartProducts: [ Cart ]
	}
`