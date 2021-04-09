const model = require('./model')

module.exports = {
	Query: {
		subcategories: async() => {
			try {
				const subcategories = await model.all()
				return subcategories
			}
			catch(error) {
				throw error
			}
		},
		subcategory: async(_, { categoryID }) => {
			try {
				const subcategory = await model.byID(categoryID)
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
		subClasses: async(_, { subcategoryID }) => {
			try {
				const subClasses = await model.subClasses(subcategoryID)
				return subClasses
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
		}
	},
	Mutation: {
		addSubcategory: async(_, { subcategoryName, categoryID }) => {
			try {
				const newSubcategory = await model.addSubcategory(subcategoryName, categoryID)

				if(newSubcategory) {
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
		deleteSubcategory: async(_, { subcategoryName, categoryID }) => {
			try {
				const deletedSubcategory = await model.deleteSubcategory(subcategoryName, categoryID)

				if (deletedSubcategory) {
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
		category: 		global => global.category_name,
		subcategory: 	global => global.subcategory_name
	},
	SubcategoryProducts: {
		id: 		global => global.product_id,
		name: 		global => global.product_name,
		price: 		global => global.product_price,
		category: 	global => global.category_name
	}
}