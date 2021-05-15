const model = require('./model')

module.exports = {
	Query: {
		recommended: async() => {
			try {
				const recommended = await model.products()
				return recommended
			}
			catch(error) {
				throw error
			}
 		}
	}
}