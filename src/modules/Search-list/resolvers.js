const model = require('./model')

module.exports = {
	Query: {
		search: async() => {
			try {
				const search = await model.subclasses()
				return search
			}
			catch(error) {
				throw error
			}
		}
	}
}