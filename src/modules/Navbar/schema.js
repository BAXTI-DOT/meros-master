const { gql } = require('apollo-server-express')

module.exports = gql`
	extend type Query {
		navbar: [ Categories ]
		popular: [ Categories]
	}

	extend type Subscription {
		navbar: [ Categories ]
	}
`