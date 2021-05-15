const { fetch, fetchAll } = require('../../lib/postgres')

const USER = `
	SELECT
		o.order_id,
		o.user_id,
		u.user_id,
		u.user_name,
		u.user_number
	FROM
		orders o
	INNER JOIN
		users u ON o.user_id = u.user_id
	WHERE
		o.order_id = $1
`

const user = (orderID) => fetch(USER, orderID)

module.exports = {
	user
}