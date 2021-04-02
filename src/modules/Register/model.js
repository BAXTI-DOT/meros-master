const { fetch, fetchAll } = require('../../lib/postgres') 

const REGISTER = `
	INSERT INTO 
		users (user_name, user_number, user_password) 
	VALUES 
		($1, $2, $3) 
	RETURNING 
		*
`

const ALL = `
	SELECT 
		* 
	FROM 
		users 
	WHERE 
		user_name = $1 
	AND 
		user_number = $2
`

const SELECT = `
	SELECT 
		* 
	FROM 
		users
`

const registerUser 	= (name, number, password) 	=> fetch(REGISTER, name, number, password)
const allUser 		= (name, number) 			=> fetchAll(ALL, name, number)
const selectUsers 	= () 						=> fetchAll(SELECT)

module.exports = {
	registerUser,
	allUser,
	selectUsers
}