const model = require('./model')

module.exports = {
	Query: {
		allSubClasses: async() => {
			try {
				const all = await model.all()
				return all
			}
			catch(error) {
				throw error
			}
		},
		subClass: async(_, { subcategoryID }) => {
			try {
				const byID = await model.byID(subcategoryID)
				return byID
			}
			catch(error) {
				throw error
			}
		},
		subclassName: async(_, { subclassID }) => {
			try {
				const name = await model.name(subclassID)
				return name
			}
			catch(error) {
				throw error
			}
		},
		subclassLink: async(_, { subclassID }) => {
			try {	
				const linkName = await model.link(subclassID)
				return linkName
			}
			catch(error) {
				throw error
			}
		},
		subclassProducts: async(_, { subclassID, sortStatus, page, limit }) => {
			try {
				const sorted = await model.sorted(subclassID, sortStatus, page, limit)
				return sorted
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		addSubclass: async(_, { subclassName, subcategoryID, categoryID }) => {
			try {	
				const newSubclass = await model.addSubclass(subclassName, subcategoryID, categoryID)

				if(newSubclass) {
					return {
						status: "200",
						message: "New subclass has been added"
					}
				}
				else {
					throw "Error while creating new subclass!!!"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteSubclass: async(_, { subclassID }) => {
			try {	
				const deletedSubClass = await model.deleteSubclass(subclassID)

				if(deletedSubClass) {
					return {
						status: "200",
						message: "Subclass has been deleted"
					}
				}
				else {
					throw "Error while deleting subclass!!!"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	},
	LinkSubClass: {
		id: global => global.subclass_id,
		category: global => global.category_name,
		subcategory: global => global.subcategory_name,
		subclass: global => global.subclass_name
	}
}