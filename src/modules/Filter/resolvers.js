const model = require('./model')
const detailModel = require('../Filters/model')

module.exports = {
	Query: {
		filters: async(_, { subcategoryID }) => {
			try {
				const filters = await model.filters(subcategoryID)
				return filters
			}
			catch(error) {
				throw error
			}
		}
	},
	Filter: {
		id: 	global => global.filtermain_id,
		name: 	global => global.filtermain_title,
		detail: async(global) => await detailModel.filterDetail(global.filtermain_id)
	}
}