const model = require('./model')

module.exports = {
	Query: {
		orderDetails: async(_, { orderID }) => {
			try {
				const orderDetails = await model.getProducts(orderID)
				return orderDetails
			} 
			catch(error) {
				throw error
			}
		}
	},
	OrderDetail: {
		id: 			global => global.order_detail_id,
		productID: 		global => global.product_id,
		productName: 	global => global.product_name,
		productCount: 	global => global.product_count,
		productPrice: 	global => global.product_price,
		productImage: 	global => global.image_link
	}
}