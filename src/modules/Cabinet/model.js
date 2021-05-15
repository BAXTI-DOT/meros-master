const { fetch, fetchAll } = require('../../lib/postgres')

const PERSONAL_DATA = `
	SELECT
		user_id,
		user_name
	FROM
		users
	WHERE
		user_id = $1
`

const data = (userId) => fetch(PERSONAL_DATA, userId)

module.exports = {
	data
}