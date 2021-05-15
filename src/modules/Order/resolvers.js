const model = require('./model') 
const pubsub = require('../../pubsub')
const ORDER = 'ORDER'

module.exports = {
	Query: {
		getOrder: async(_, {}) => {
			try {
				const orders = await model.selectOrder()
				return orders
			}
			catch(error) {
				throw new Error(error).message || error
			}
		},
		getOrderSum: async(_, { orderID }) => {
			try {
				const { order_sum } = await model.orderSum(orderID)
				return order_sum
			}
			catch(err) {
				throw err
			}
		}
	},
	Mutation: {
		submitOrder: async(_, { orderID }) => {
			try {
				const submitted = await model.submitOrder(orderID)

				if(submitted) {
					pubsub.publish(ORDER)
					return {
						status: 200,
						message: "Received order"
					}
				}
			}
			catch(error) {
				console.log(error)
				return {
					status: 400,
					message: "Bad request"
				}
			}
		}
	},
	Subscription: {
		getOrder: {
			resolve: async(_, {}) => {
				try {
					const orders = await model.selectOrder()
					return orders
				} catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([ORDER])
		}
	},
	Order: {
		id: 			global => global.order_id,
		orderNumber: 	global => global.order_number,
		orderStatus: 	global => global.order_status,
		createdAt: 		global => global.order_created_at
	}
}