const model = require('./model')
const pubsub = require('../../pubsub')
const CATEGORY = 'CATEGORY'

module.exports = {
	Query: {
		categories: async() => {
			try {
				const categories = await model.categories()
				return categories
			}
			catch(error) {
				throw error
			}
		},
		category: async(_, { categoryId }) => {
			try {
				const category = await model.byID(categoryId)
				return category
			}
			catch(error) {
				throw error
			}
		},
		categoryName: async(_, { categoryId }) => {
			try {
				const { category_name } = await model.name(categoryId)
				return category_name
			}
			catch(error) {
				throw error
			}
		},
		categoryCount: async(_, { categoryId }) => {
			try {
				const { count } = await model.productCount(categoryId)
				return count
			}
			catch(error) {
				throw error
			}
		},
		newProducts: async(_, { categoryId }) => {
			try {
				const newProducts = await model.newProducts(categoryId)
				return newProducts
			}
			catch(error) {
				throw error
			}
 		},
 		giftProducts: async(_, { categoryId }) => {
			try {
				const giftProducts = await model.giftProducts(categoryId)
				return giftProducts
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
 		},
 		giftProductTitle: async(_, { categoryId }) => {
 			try {
 				const title = await model.giftProductTitle(categoryId)
 				return title
 			}
 			catch(error) {
 				throw error
 			}
 		}
	},
	Mutation: {
		addCategory: async(_, { categoryName }) => {
			try {
				if(categoryName) {
					const newCategory = await model.addCategory(categoryName)
					pubsub.publish(CATEGORY)

					if(newCategory) {
						return {
							status: "200",
							message: "New category has been addded!!"
						}
					}
					else throw "Error while adding category!!"
				}
				else {
					throw "categoryname was not provided"
				}
			}	
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteCategory: async(_, { categoryID }) => {
			try {
				const deletedCategory = await model.deleteCategory(categoryID)
				pubsub.publish(CATEGORY)

				if(deletedCategory) {
					return {
						status: "200",
						message: "The category has successfully been deleted!!"
					}
				}
				else throw "Error while deleting category"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		updateCategory: async(_, { categoryID, categoryName }) => {
			try {
				const updatedCategory = await model.updateCategory(categoryName, categoryID)

				if(updatedCategory) {
					return {
						status: "200",
						message: "The category has successfully been updated!!"
					}
				}
				else throw "Error while updating category"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	},
	Categories: {
		id: 	global => global.category_id,
		name: 	global => global.category_name,
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
	},
	Subscription: {
		categories: {
			resolve: async(payload, args) => {
				try {
					const categories = await model.categories()
					return categories
				}
				catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([CATEGORY])
		}
	}
}