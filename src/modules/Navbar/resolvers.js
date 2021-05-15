const model = require('./model')
const pubsub =  require('../../pubsub')
const NAVBAR = 'NAVBAR'

module.exports = {
	Query: {
		navbar: async() => {
			try {
				const navbar = await model.navbar()
				return navbar
			}
			catch (error) {
				throw error
			}
		},
		popular: async() => {
			try {
				const popular = await model.popular()
				return popular
			}
			catch (error) {
				throw error
			}
		}
	},
	Subscription: {
		navbar: {
			resolve: async(payload, args) => {
				try {
					const navbar = await model.navbar()
					return navbar
				}
				catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([NAVBAR])
		}
	}
}