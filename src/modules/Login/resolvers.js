const bcrypt = require('bcrypt') 
const { AuthenticationError } = require('apollo-server-express') 
const loginModel = require('./model') 
const jwt = require('../../lib/jwtGenerator') 

module.exports = {
	Query: {
		demo: () => "OK"
	},
	Mutation: {
		login: async(_, { number, password }) => {	
			try {
				if(!(number && password)) return new Error("Fields are empty")
				
				const rows = await loginModel.selectUser(number)

				if(rows.length === 0) {
					return new Error("User does not exists, make registration")
				}

				const compare = await bcrypt.compare(password, rows[0].user_password)

				const find = rows.find(e => {
					if(e.phone_number == number) {
						console.log(e)
					}
				})

				// console.log(rows,password, rows[0].password)

				if(!compare) {
					return new Error("password incorrect")
				}

				// signing token
				return jwt.sign(rows[0].user_id, number)

			}
			catch(e) {
				console.error(e.message)
				return new AuthenticationError()
			}
		}
	}
}