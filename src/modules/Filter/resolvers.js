const model = require('./model')
const detailModel = require('../Filters/model')
const oldModel = require('../OldFilters/model')

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
		},
		editFilters: async(_, { productID }) => {
			try {
				const editFilters = await model.editFilters(productID)
				return editFilters
			}
			catch(error) {
				throw error
			}
		}
	},
	Filter: {
		id: 	global => global.filtermain_id,
		name: 	global => global.filtermain_title,
		oldDetail: async global => {
			const m = await oldModel.oldDetails(global.product_id, global.filtermain_id)
			return m
		},
		detail: async(global) => await detailModel.filterDetail(global.filtermain_id)
	}
}