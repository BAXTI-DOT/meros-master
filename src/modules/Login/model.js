const { fetch, fetchAll } = require('../../lib/postgres')

const LOGIN = `
	SELECT 
		*
	FROM 
		users 
	WHERE 
		user_number = $1
`

const selectUser = (number) => fetchAll(LOGIN, number)

module.exports = {
	selectUser
}