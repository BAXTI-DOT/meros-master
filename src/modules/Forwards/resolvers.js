const { verify } = require('../../lib/jwtGenerator')
const model = require('./model')
const pubsub = require('../../pubsub')
const FORWARD = 'FORWARD'

module.exports = {
	Query: {
		getForward: async(_, {}, { token }) => {
			try {
				const { userId } = verify(token)
				console.log(userId)
				const forwards = await model.forwards(userId)
				return forwards
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		addToForwards: async(_, { productID }, { token }) => {
			try {
				const { userId } = verify(token)
				const checkExisting = await model.checkForward(productID, userId)

				if(checkExisting.length !== 0) {
					return {
						status: "BOR",
						message: "Your product is already in forwards"
					}
				}

				const newForward = await model.addForward(productID, userId)

				console.log(newForward)

				if(newForward) {
					pubsub.publish(FORWARD)
					return {
						status: "200",
						message: "Product has been added to forwards"
					}
				}
				else {
					throw "Error while deleting from forwards"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					messsage: new Error(error).message || error
				}
			}
		},
		deleteFromForward: async(_, { productID }, { token }) => {
			try {
				const { userId } = verify(token)

				const deletedForward = await model.deleteForward(productID, userId)

				if(deletedForward) {
					pubsub.publish(FORWARD)
					return {
						status: "200",
						messsage: "Product deleted successfully"
					}
				}
				else {
					throw "Error deleting product"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	},
	Subscription: {
		getForward: {
			resolve: async(payload, args, { token }) => {
				try {
					const { userId } = verify(token)
					console.log(userId)
					const forwards = await model.forwards(userId)
					return forwards
				}
				catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([FORWARD])
		}
	}
}