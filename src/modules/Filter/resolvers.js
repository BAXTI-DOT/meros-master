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
	Mutation: {
		createFilter: async(_, { title, subcategoryID }) => {
			try {	
				const newFilter = await model.newFilter(title, subcategoryID)

				if(newFilter) {
					return {
						status: 200,
						message: "Success"
					}
				}
			}
			catch(error) {
				return {
					status: 400,
					message: new Error(error) || error.message
				}
			}
		},
		deleteFilter: async(_, { filterID }) => {
			try {	
				const deletedFilter = await model.deletefilter(filterID)

				if(deletedFilter) {
					return {
						status: 200,
						message: "Success delete"
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