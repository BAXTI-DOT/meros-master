const model = require('./model')

module.exports = {
	Query: {
		orderUsers: async(_, { orderID }) => {
			try {
				const user = await model.user(orderID)
				return user 
			} catch(err) {
				throw err
			}
		}
	},
	User: {
		id: 	global => global.user_id,
		name: 	global => global.user_name,
		number: global => global.user_number
	}
}