const model = require('./model')

module.exports = {
	CREATE_PRODUCT: async(req, res) => {
		try {
			const { data, image } = req.body

			const newProduct = await model.newProduct(data)

			const newImage = await model.newImage(image.url, newProduct.product_id)

			if(newProduct && newImage) {
				res.status(200).send({
					message: "Sucess product created"
				})
			}
		}
		catch(error) {
			res.status(400).send({
				message: "Bad request"
			})
		}
	}
}