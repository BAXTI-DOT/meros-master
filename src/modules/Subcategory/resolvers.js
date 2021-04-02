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
	}
}