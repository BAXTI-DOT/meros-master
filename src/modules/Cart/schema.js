const { gql } = require('apollo-server-express')

module.exports = gql`

	type Cart {
		id: ID!
		name: String!
		price: Int!
		count: Int!
		subcategory: String!
		image: String!
	}

	type Sum {
		sum: Int!
	}
	
	extend type Query {
		getCartProducts: [ Cart ]
		getCartSum: [ Sum! ]
	}

	extend type Mutation {
		deleteFromCart(productID: ID!): Data
		addToCart(productID: ID! productCount: Int): Data
		updateCountPlus(cartID: ID!): Data
		updateCountMinus(cartID: ID!): Data
	}

	extend type Subscription {
		getCartProducts: [ Cart ]
		getCartSum: [ Sum! ]
	}
`