const model = require('./model')

module.exports = {
	Mutation: {
		addFiltered: async(_, { productID, filterID }) => {
			try {
				const newFiltered = await model.newFiltered(productID, filterID)

				if(newFiltered) {
					return {
						status: "200",
						message: "Success"
					}
				}
				else {
					throw "Error creating filtered"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	}
}