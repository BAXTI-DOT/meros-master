const model = require('./model')

module.exports = {
	Query: {
 		giftProducts: async(_, { categoryId }) => {
			try {
				const giftProducts = await model.products(categoryId)
				return giftProducts
			}
			catch(error) {
				throw error
			}
 		}
	}
}