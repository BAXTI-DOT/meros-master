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
 		},
 		giftProductTitle: async(_, { categoryId }) => {
 			try {
 				const title = await model.productTitle(categoryId)
 				return title
 			}
 			catch(error) {
 				throw error
 			}
 		}
	},
	Mutation: {
		addGiftProduct: async(_, { productID }) => {
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
		deleteGiftProduct: async(_, { productID }) => {
			try {

				const existingProduct = await model.byId(productID)

				if(existingProduct.length !== 0) throw "Product has already been deleted!!"

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
		addGiftTitle: async(_, { titleName, categoryID }) => {
			try {
				const existingTitle = await model.byName(titleName)

				const existingCategoryTitle = await model.byTitCat(categoryID)

				console.log(existingCategoryTitle)

				if(existingTitle.length !== 0) throw "Title already exists"

				if(existingCategoryTitle.length !== 0) throw "Title for that category exists"

				const newTitle = await model.addTitle(titleName, categoryID)

				if(newTitle) {
					return {
						status: "200",
						message: "Title has been added"
					}
				}
				else throw "Error while adding new title"

			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
 		},
 		changeGiftTitle: async(_, { titleName, titleID }) => {
			try {

				const updatedTitle = await model.changeTitle(titleName, titleID)

				if(updatedTitle) {
					return {
						status: "200",
						message: "Title has been updated"
					}
				}
				else throw "Error while updating title"

			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
 		},
 		deleteGiftTitle: async(_, { titleID }) => {
			try {

				const existingTitle = await model.byTitleID(titleID)

				if(existingTitle.length === 0) throw "Title has already been deleted"

				const deletedTitle = await model.deleteTitle(titleID)

				if(deletedTitle) {
					return {
						status: "200",
						message: "Title has been deleted"
					}
				}
				else throw "Error while deleting title"

			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
 		}
	}
}