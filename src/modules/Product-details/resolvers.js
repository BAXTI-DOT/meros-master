const model = require('./model')

module.exports = {
	Query: {
		productDetail: async(_, { productID }) => {
			try {
				const details = await model.productDetail(productID)
				return details
			}
			catch(err) {
				throw err
			}
		}
	},
	ProductDetail: {
		title: 	global => global.filtermain_title,
		name: 	global => global.filterdetail_title
	}
}