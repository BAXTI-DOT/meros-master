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
		}
	},
	Filters: {
		id: global => global.filterdetail_id,
		name: global => global.filterdetail_title
	}
}