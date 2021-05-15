const model = require('./model')
const { verify } = require('../../../lib/jwtGenerator')

module.exports = {
	ADD_TO_CART: async(req, res) => {
		try {
			const { userId } = verify(req.headers.authorization)
			const { id, count } = req.body.data

			const existing = await model.check(id)

			if(existing.length !== 0) {
				const updateCart = await model.updateCart(id)

				if(updateCart) {
					res.status(200).send({
						message: "Update cart"
					})
				}
			} else {

				const newCart = await model.newCart(id, count, userId)

				if(newCart) {
					res.status(200).send({
						message: "Success"
					})
				}
			}

		} catch(err) {
			res.status(400).json({ status: "overloading" })
		}
	},
	UPDATE_PLUS: async(req, res) => {
		try {
			const { id } = req.body.data

			const updated = await model.updatePlus(id)

			if(updated) {
				res.status(200).send({
					message: "Update plus"
				})
			}
		} catch(err) {
			res.status(500).send(err)
		}
	},
	UPDATE_MINUS: async(req, res) => {
		try {
			const { id } = req.body.data

			const updated = await model.updateMinus(id)

			if(updated) {
				res.status(200).send({
					message: "Update minus"
				})
			}
		} catch(err) {
			res.status(500).send(err)
		}
	},
	GET_CART: async(req, res) => {
		try {
			const { userId } = verify(req.headers.authorization)
			if(userId) {
				const cartProducts = await model.getProducts(userId)
				const sum = await model.sum(userId)
				res.status(200).send({
					cartProducts, sum
				})
			}
		} catch(err) {
			res.status(500).send(err)
		}
	},
	DELETE_CART: async(req, res) => {
		try {	

			const { productID } = req.body.data

			const { userId } = verify(req.headers.authorization)

			const deletedCart = await model.deleteCart(productID, userId)

			if(deletedCart) {
				res.status(200).send({
					message: "Success delete"
				})
			}
		} catch(err) {
			res.status(400).json({ status: "overloading" })
		}
	}
}