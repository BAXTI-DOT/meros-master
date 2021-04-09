const jwt = require('../../lib/jwtGenerator') 
const registerModel = require('./model') 
const bcrypt  = require('bcrypt') 
const { AuthenticationError }  = require('apollo-server-express') 

module.exports = {
	Mutation: {
		register: async(_, args) => {
			try {
				// bcrypting password
				const saltRound = 10
				const salt = await bcrypt.genSalt(saltRound)
				const bcryptPassword = await bcrypt.hash(args.password, salt)

				// checking existing user
				const allRows  = await registerModel.allUser(args.name, args.number)
				const selectRows = await registerModel.selectUsers()

				const filter = selectRows.find(e => e.user_number === args.number)

				if(allRows.length !== 0 || filter) {
					return new Error("User has already been registered")
				}

				// Checking validity of number
				if(args.number.length !== 13) {
					return new Error("Missing number")
				}

				// Checking validity of number
				if(isNaN(args.number)) {
					return new Error("Not valid phone number")
				}

				for (let i of args.number) {
					if(i === 'e') {
						return new Error("Not valid phone number") 
					}
				}

				// insert reg_users
				const newUser = await registerModel.registerUser(args.name, args.number, bcryptPassword)

				// signing token
				if(newUser) {
					const generate = jwt.sign(newUser.user_id, newUser.user_number)
					return generate
				}

			}
			catch(e) {
				console.error(e.message)
				return new Error("Authorization Error")
			}
		}
	}
}