const bcrypt = require('bcrypt') 
const { AuthenticationError } = require('apollo-server-express') 
const loginModel = require('./model') 
const jwt = require('../../lib/jwtGenerator') 

const admins = [
	{
		id: 1,
		username: "Baxtiyor",
		password: "root1234"
	},
	{
		id: 2,
		username: "Nilufar",
		password: "root5678"
	}
]

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
				return new AuthenticationError(e)
			}
		},
		adminLogin: async(_, { username, password }) => {
			try {
				const admin = admins.find(e => e.username === username && e.password === password)

				if(admin) {
					return jwt.sign(username, password)
				}
				else {
					throw new Error("You are not logged") 
				}
			}
			catch(err) {
				return new AuthenticationError(err)
			}
		}
	}
}