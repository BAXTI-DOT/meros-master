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
		}
	},
	Mutation: {
		addToNavbar: async(_, { categoryID }) => {
			try {
				const all = await model.navbar()

				if(all.length === 11) {
					throw "You have reached limit"
				}

				const exists = await model.byID(categoryID)

				if(exists.length !== 0) {
					throw "This category already in navbar"
				}

				const newNavbarCategory = await model.addToNavbar(categoryID)

				if(newNavbarCategory) {
					pubsub.publish(NAVBAR)
					return {
						status: "200",
						message: "Success"
					}
				}
				else {
					throw "Error creating navbar category"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
 		},
 		deleteFromNavbar: async(_, { categoryID }) => {
 			try {
 				const deletedFromNavbar = await model.deleteFrom(categoryID)

 				if(deletedFromNavbar) {
					pubsub.publish(NAVBAR)
 					return {
 						status: "200",
 						message: "Succesfully deleted from navbar"
 					}
 				}
 				else {
 					throw "Error while deleting from navbar"
 				}
 			}
 			catch(error) {
 				return {
 					status: "Error",
 					message: new Error(error).message || error
 				}
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