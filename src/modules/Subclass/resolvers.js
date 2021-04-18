const model = require('./model')
const pubsub = require('../../pubsub')
const SUBCLASS = 'SUBCLASS'

module.exports = {
	Query: {
		subClass: async(_, { categoryID, subcategoryID }) => {
			try {
				if(categoryID && subcategoryID) {
					const subcategory = await model.byID(categoryID, subcategoryID)
					return subcategory
				}
				else if(categoryID) {
					const category = await model.byCategory(categoryID)
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
		},
		subclasses: async(_, { categoryID, subcategoryID }) => {
			try {
				const subclasses = await model.byID(categoryID, subcategoryID)
				return subclasses
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
				const newSubclass = await model.addSubClass(subclassName, subcategoryID, categoryID)

				if(newSubclass) {
					pubsub.publish(SUBCLASS)
					return {
						status: "200",
						message: "New subclass has been added"
					}
				}
				else {
					throw new Error("Error while creating new subclass!!!")
				}
			}
			catch(error) {
				throw new Error(error).message || error
			}
		},
		deleteSubclass: async(_, { subclassID }) => {
			try {	
				const deletedSubClass = await model.deleteSubclass(subclassID)

				if(deletedSubClass) {
					pubsub.publish(SUBCLASS)
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
	},
	Subscription: {
		subClass: {
			resolve: async(_, { categoryID, subcategoryID }) => {
				try {
					if(categoryID && subcategoryID) {
						const subcategory = await model.byID(categoryID, subcategoryID)
						console.log(categoryID, subcategoryID)
						return subcategory
					}
					else if(categoryID) {
						const category = await model.byCategory(categoryID)
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
			},
			subscribe: () => pubsub.asyncIterator([SUBCLASS])
		}
	}
}