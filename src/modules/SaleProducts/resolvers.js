const model = require('./model')

module.exports = {
	Query: {
		saleProducts: async() => {
			try {
				const products = await model.product()
				return products
			}
			catch(error) {
				throw error
			}
		}
	}
}