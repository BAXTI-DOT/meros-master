const model = require('./model')

module.exports = {
	Query: {
		recommended: async() => {
			try {
				const recommended = await model.products()
				return recommended
			}
			catch(error) {
				throw error
			}
 		}
	},
	Mutation: {
		addRecommendedProduct: async(_, { productID }) => {
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
		deleteRecommendedProduct: async(_, { productID }) => {
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