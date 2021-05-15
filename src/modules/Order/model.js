const { fetch, fetchAll } = require('../../lib/postgres') 

const SELECT_ORDER = `
	SELECT
		order_id,
		order_number,
		order_status,
		order_created_at
	FROM
		orders
`

const ORDER_SUM = `
	SELECT
		order_sum
	FROM	
		orders
	WHERE
		order_id = $1
`

const SUBMIT_ORDER = `
	UPDATE
		orders
	SET
		order_status = true
	WHERE
		order_id = $1
	RETURNING *
`

const selectOrder 	= () 		=> fetchAll(SELECT_ORDER)
const orderSum 		= (orderID) => fetch(ORDER_SUM, orderID)
const submitOrder 	= (orderID) => fetch(SUBMIT_ORDER, orderID)

module.exports = {
	selectOrder,
	submitOrder,
	orderSum
}