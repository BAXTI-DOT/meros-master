const express = require('express')
const model =  require('./model')

module.exports = {
	POST_FILTER: async(req, res) => {
		try {
			const filters = req.body.data

			for (let i of filters) {

				const newFilters = await model.makeFilter(i.productID, i.filterID)
			}
		}
		catch(err) {
      		return res.send(err.message);
		}
	},
	UPDATE_FILTERED: async(req, res) => {
		try {

			const { data: filters} = req.body

			for (let i of filters) {

				const updatedFilter = await model.updateFilter(i.filterID, i.filteredID)

				if(updatedFilter) {
					return {
						status: 200,
						message: "Success"
					}				}
				else {
					throw new Error("error updating filter")
				}
			}
		}
		catch(err) {
      		return res.send(err.message);
		}
	}
}