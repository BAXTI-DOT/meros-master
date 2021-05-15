const { fetch, fetchAll } = require('../../../lib/postgres')

const NEW_ORDER = `
	INSERT INTO
		orders(
			state_id,
			region_id,
			order_address,
			order_person,
			order_phone,
			order_sum,
			user_id
		)
	VALUES(
		$1,
		$2,
		$3,
		$4,
		$5,
		$6,
		$7
	)

	RETURNING order_id
`

const NEW_ORDER_DETAIL = `
		INSERT INTO order_details(
			product_id,
			product_count,
			order_id
		)

		VALUES($1, $2, $3)

		RETURNING order_detail_id
`

const DELETE_FROM_CART = `
	DELETE FROM
		cart
	WHERE
		cart_id = $1
`

const newOrder = (stateID, regionID, address, person, phone, sum, userID) => fetch(NEW_ORDER, stateID, regionID, address, person, phone, sum, userID)

const newDetail = (productID, productCount, orderID) => fetch(NEW_ORDER_DETAIL, productID, productCount, orderID)
const deleteCart = (cartID) => fetch(DELETE_FROM_CART, cartID)

module.exports = {
	newOrder,
	newDetail,
	deleteCart
}