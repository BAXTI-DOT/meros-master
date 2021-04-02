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

				const filter = selectRows.find(e => e.phone_number === args.number)

				// Checking validity of number
				if(allRows.length !== 0 || filter) {
					return new Error("User has already been registered")
				}

				if(args.number.length !== 13) {
					return new Error("Missing number")
				}

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
					const generate = jwt.sign(newUser.registered_users_id, newUser.phone_number)
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