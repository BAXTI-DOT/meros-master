const model = require('./model')
const detailModel = require('../Product-details/model')

module.exports = {
	Query: {
		singleProduct: async(_, { productID }) => {
			try {
				const products = await model.getProducts(productID)
				return products
			}
			catch(err) {	
				throw err
			}	
		},
		singleProductLink: async(_, { productID }) => {
			try {
				const link = await model.getLink(productID)
				return link
			}
			catch(err) {
				throw err
			}
		}
	},
	SingleProduct: {
		id: global => global.product_id,
		name: global => global.product_name,
		price: global => global.product_price,
		definition: global => global.product_definition,
		image: global => global.image_link,
		details: async global => await detailModel.productDetail(global.product_id)
	}
}