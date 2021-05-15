const model = require('./model')

module.exports = {
	Query: {
		productID: async() => {
			try {
				const { uuid_generate_v4: productID } = await model.generate()
				return productID
			}
			catch (error) {
				throw error
			}
		},
		orderID: async() => {
			try {
				const { uuid_generate_v4: orderID } = await model.generate()
				return productID
			}
			catch (error) {
				throw error
			}
		}
	}
}