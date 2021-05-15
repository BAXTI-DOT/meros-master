const model = require('./model')
const { verify } = require('../../lib/jwtGenerator')

module.exports = {
	Query: {
		cabinet: async(_, {}, { token }) => {
			try {
				const { userId } = verify(token)
				const data = await model.data(userId)
				return data
			}
			catch(err) {
				throw err
			}
		}
	},
	PersonalData: {
		id: 	global => global.user_id,
		name: 	global => global.user_name 
	}
}