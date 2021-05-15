const { fetch, fetchAll } = require('../../lib/postgres')

const ORDER_ADDRESS = `
	SELECT
		o.order_id,
		o.order_address,
		o.order_person,
		o.order_phone,
		o.order_number,
		s.state_id,
		o.state_id,
		s.state_name,
		o.region_id,
		r.region_id,
		r.region_name
	FROM
		orders o
	INNER JOIN
		states s ON o.state_id = s.state_id
	INNER JOIN
		regions r ON o.region_id = r.region_id
	WHERE
		o.order_id = $1
`

const getAddress = (orderID) => fetch(ORDER_ADDRESS, orderID)

module.exports = {
	getAddress
}