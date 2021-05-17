const model = require('./model')

module.exports = {
	Query: {
		filterDetails: async(_, { filterID }) => {
			try {
				const filters = await model.filterDetail(filterID)
				return filters
			}
			catch(error) {
				throw error
			}
		},
		oldDetails: async(_, { productID }) => {
			try {
				const filters = await model.oldDetails(productID)
				return filters
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		newDetail: async(_, { title, filterID }) => {
			try {	
				const newDetail = await model.newDetail(title, filterID)

				if(newDetail) {
					return {
						status: 200,
						message: "Success insert"
					}
				}
			}
			catch(error) {
				return {
					status: 400,
					message: new Error(error) || error.message
				}
			}
		}
	},
	Filters: {
		id: global => global.filterdetail_id,
		name: global => global.filterdetail_title
	}
}