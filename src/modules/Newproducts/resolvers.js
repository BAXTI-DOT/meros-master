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
 		},
 		newProductTitle: async(_, { categoryId }) => {
 			try {
 				const title = await model.newProductTitle(categoryId)
 				return title
 			}
 			catch(error) {
 				throw error
 			}
 		}
	},
	Mutation: {
		addNewProduct: async(_, { productID }) => {
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
		deleteNewProduct: async(_, { productID }) => {
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
		addNewTitle: async(_, { titleName, categoryID }) => {
			try {
				const existingTitle = await model.byName(titleName)

				const existingCategoryTitle = await model.byTitCat(categoryID)

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
 		changeNewTitle: async(_, { titleName, titleID }) => {
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
 		deleteNewTitle: async(_, { titleID }) => {
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
	},
	Products: {
		id: 			global => global.product_id,
		name: 			global => global.product_name,
		price: 			global => global.product_price,
		subcategory: 	global => global.subcategory_name
	},
	Title: {
		id: 	global => global.title_id,
		name: 	global => global.title_name
	}
}