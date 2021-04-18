const model = require('./model')

module.exports = {
	Query: {
		products: async(_, { categoryID, subcategoryID, subclassID }) => {
			try {

				if(categoryID && subcategoryID && subclassID) {
					const subclass = await model.subclass(subclassID)
					return subclass
				}
				else if(categoryID && subcategoryID) {
					const subcategory = await model.subcategory(subcategoryID)
					return subcategory
				}
				else if(categoryID) {
					const category = await model.category(categoryID)
					return category
				}
				else {
					const all = await model.all()
					return all
				}
			}
			catch(error) {
				throw error
			}
		}
	},
	AdminProduct: {
		id: 	global => global.product_id,
		name: 	global => global.product_name
	}
}