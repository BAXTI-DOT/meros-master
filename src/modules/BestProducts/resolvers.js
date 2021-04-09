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
	},
	Mutation: {
		addBestProduct: async(_, { productID }) => {
			try {

				const existingProduct = await model.byId(productID)

				if(existingProduct.length !== 0) throw "Product has already been added!!"

				const newProduct = await model.addProduct(productID)

				if(newProduct) {
					return {
						status: "200",
						message: "Product has been added successfully"
					}
				}
				else throw "Error while adding product!!!"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteBestProduct: async(_, { productID }) => {
			try {

				const existingProduct = await model.byId(productID)

				console.log(existingProduct)

				if(existingProduct.length === 0) throw "Product has already been deleted!!"

				const deletedProduct = await model.deleteProduct(productID)
				
				if(deletedProduct) {
					return {
						status: "200",
						message: "Product has been deleted successfully"
					}
				}
				else throw "Error while deleting product!!!"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},

	}
}