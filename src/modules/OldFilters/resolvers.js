const model = require('./model')

module.exports = {
	Query: {
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
	oldFilters: {
		id: global => global.filterdetail_id,
		filteredID: global => global.filtered_id,
		name: global => global.filterdetail_title
	}
}