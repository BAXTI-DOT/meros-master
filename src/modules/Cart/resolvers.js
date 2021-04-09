const model = require('./model')
const { verify } = require('../../lib/jwtGenerator')
const pubsub = require('../../pubsub')
const CART = 'CART'

module.exports = {
	Query: {
		getCartProducts: async(_, {}, { token }) => {
			try {
				const { userId } = verify(token)
				const products = await model.getProducts(userId)
				return products
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		addToCart: async(_, { productID, productCount }, { token }) => {
			try {
				const { userId } = verify(token)

				const checkExisting = await model.checkExisting(productID, userId)

				if(checkExisting.length !== 0) {
					const updateCart = await model.updateCount(productCount, productID, userId)

					if(updateCart) {
						pubsub.publish(CART)
						return {
							status: "200",
							message: "Updated cart!!"
						}
					}
					else {
						throw "Error while updating count"
					}
				}
				else {

					const newCartProduct = await model.addToCart(productID, productCount, userId)

					if(newCartProduct) {
						pubsub.publish(CART)
						return {
							status: "200",
							message: "New product has been added to the cart"
						}
					}
					else {
						throw "Error while adding to cart" 
					}
				}
				
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteFromCart: async(_, { productID }, { token }) => {
			try {
				const { userId } = verify(token)

				const deletedFromCart = model.deleteFromCart(productID, userId)

				if(deletedFromCart) {
					pubsub.publish(CART)
					return {
						status: "200",
						message: "The product has been deleted successfully from the cart"
					}
				}
				else {
					throw "Error while deleting from the cart"
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
		getCartProducts: {
			resolve: async(payload, args, { token }) => {
				try {
					const { userId } = verify(token)
					const products = await model.getProducts(userId)
					return products
				}
				catch(error) {
					throw new Error(error).message || error
				}
			},
			subscribe: () => pubsub.asyncIterator([CART]),
		}
	},
	Cart: {
		id: 			global => global.cart_id,
		name: 			global => global.product_name,
		price: 			global => global.product_price,
		count: 			global => global.product_count,
		subcategory: 	global => global.subcategory_name
	}
}