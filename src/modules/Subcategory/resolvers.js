const model = require('./model')
const subclassModel = require('../Subclass/model')
const pubsub = require('../../pubsub')
const SUBCATEGORY = 'SUBCATEGORY'

module.exports = {
	Query: {
		subcategory: async(_, { categoryID }) => {
			try {
				if(categoryID) {
					const subcategory = await model.byID(categoryID)
					return subcategory
				}
				else {
					const subcategories = await model.all()
					return subcategories
				}
			}
			catch(error) {
				throw error
			}
		},
		subcategories: async(_, { categoryID }) => {
			try {
				const subcategories = await model.byID(categoryID)
				return subcategories
			}
			catch(error) {
				throw error
			}
		},
		psubcategory: async(_, { productID }) => {
			try {
				const subcategory = await model.byproductID(productID)
				return subcategory
			}
			catch(error) {
				throw error
			}
		},
		subcategoryName: async(_, { subcategoryID }) => {
			try {
				const { subcategory_name: name} = await model.name(subcategoryID)
				return name
			}
			catch(error) {
				throw error
			}
		},
		subcategoryProducts: async(_, { subcategoryID, sortStatus, page, limit }) => {
			try {	
				const products = await model.sortedProducts(subcategoryID, sortStatus, page, limit)
				return products
			}
			catch(error) {
				throw error
			}
		},
		subcategoryLink: async(_, { subcategoryID }) => {
			try {
				const linkName = await model.linkName(subcategoryID)
				return linkName
			}
			catch(error) {
				throw error
			}
		},
		modalSubcategory: async(_, { categoryID }) => {
			try {
				const modal = await model.modal(categoryID)
				return modal
			}
			catch(err) {
				throw err
			}
		}
	},
	Mutation: {
		addSubcategory: async(_, { subcategoryName, categoryID }) => {
			try {
				const newSubcategory = await model.addSubcategory(subcategoryName, categoryID)

				if(newSubcategory) {
					pubsub.publish(SUBCATEGORY)
					return {
						status: "200",
						message: "New subcategory"
					}
				}
				else throw "Error while adding subcategory"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteSubcategory: async(_, { subcategoryID }) => {
			try {
				const deletedSubcategory = await model.deleteSubcategory(subcategoryID)

				if (deletedSubcategory) {
					pubsub.publish(SUBCATEGORY)
					return {
						status: "200",
						message: "The subcategory has successfully been deleted!!!"
					}
				}
				else throw "Errow while deleting subcategory!!"
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	},
	Subcategories: {
		id: 	global => global.subcategory_id,
		name: 	global => global.subcategory_name
	},
	SubClasses: {
		id: 	global => global.subclass_id,
		name: 	global => global.subclass_name
	},
	LinkSubcategory: {
		id: 			global => global.subcategory_id,
		categoryID: 	global => global.category_id,
		category: 		global => global.category_name,
		subcategory: 	global => global.subcategory_name,
		subcategoryID: 	global => global.subcategory_id
	},
	SubcategoryProducts: {
		id: 		global => global.product_id,
		name: 		global => global.product_name,
		price: 		global => global.product_price,
		category: 	global => global.category_name,
		sale: 		global => global.sale_amount,
		image: 		global => global.image_link
	},
	Modalsubcategory: {
		id: 			global => global.subcategory_id,
		name: 			global => global.subcategory_name,
		subclass: async global => await subclassModel.subclasses(global.subcategory_id)
	},
	Subscription: {
		subcategory: {
			resolve: async(payload, { categoryID }) => {
				try {
					if(categoryID) {
						const subcategory = await model.byID(categoryID)
						return subcategory
					}
					else {
						const subcategories = await model.all()
						return subcategories
					}
				}
				catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([SUBCATEGORY])
		}
	}
}