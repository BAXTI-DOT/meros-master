const model = require('./model')

module.exports = {
	Query: {
		bestProducts: async() => {
			try {
				const bestProducts = await model.products()
				return bestProducts
			}
			catch(error) {
				throw error
			}
 		}
	}
}