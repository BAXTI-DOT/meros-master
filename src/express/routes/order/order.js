const model = require('./model')
const { verify } = require('../../../lib/jwtGenerator')
module.exports = {
	POST: async(req, res) => {
		try {

			const { userId } = verify(req.headers.authorization)
			const { cartSum, cartProducts, info: { stateID, regionID, address, name, number } } = req.body.data

			const newOrder = await model.newOrder(stateID, regionID, address, name, number, cartSum, userId)

			for (let i of cartProducts) {
				const newOrderDetail = await model.newDetail(i.product_id, i.product_count, newOrder.order_id)
			}

			for(let i of cartProducts) {
				const deletedCart = await model.deleteCart(i.cart_id)
			}

			if(newOrder) {
				res.status(200).send({
					message: "Success order"
				})
			}


		} catch(err) {
			res.status(400).json({ status: "overloading" })
		}
	}
}