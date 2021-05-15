const model = require('./model')

module.exports = {
	Query: {
		orderAddress: async(_, { orderID } ) => {
			try {
				const address = await model.getAddress(orderID)
				return address
			}
			catch(error) {
				throw error
			}
		}
	},
	OrderInfo: {
		state: 			global => global.state_name,
		region: 		global => global.region_name,
		address: 		global => global.order_address,
		fullName: 		global => global.order_person,
		phone: 			global => global.order_phone,
	}
}