const model = require('./model')
const subcategoryModel = require('../Subcategory/model')
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
		category: async(_, { productID }) => {
			try {
				const category = await model.byID(productID)
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
 		byCategoryID: async(_, { categoryID }) => {
 			try {	
 				const byCategoryID = await model.byCategoryID(categoryID)
 				return byCategoryID
 			}
 			catch(error) {
 				throw error
 			}
 		}
	},
	Mutation: {
		addCategory: async(_, { categoryName, isNavbar, isPopular }) => {
			try {
				if(categoryName) {
					const newCategory = await model.addCategory(categoryName, isNavbar, isPopular)
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
		updateCategory: async(_, { categoryID, categoryName, isNavbar, isPopular }) => {
			try {
				const updatedCategory = await model.updateCategory(categoryName, categoryID, isNavbar, isPopular)

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
		isNavbar: global => global.is_navbar,
		isPopular: global => global.is_popular
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
	Modal: {
		id: global => global.category_id,
		name: global => global.category_name,
		subcategory: async global => await subcategoryModel.modal(global.category_id)
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