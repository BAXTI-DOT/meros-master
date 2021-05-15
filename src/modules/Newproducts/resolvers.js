const model = require('./model')

module.exports = {
	Query: {
		newProducts: async(_, { categoryId }) => {
			try {
				const newProducts = await model.newProducts(categoryId)
				return newProducts
			}
			catch(error) {
				throw error
			}
 		}
	},
	Products: {
		id: 			global => global.product_id,
		name: 			global => global.product_name,
		price: 			global => global.product_price,
		subcategory: 	global => global.subcategory_name,
		sale: 			global => global.sale_amount,
		image: 			global => global.image_link
	}
}