const { fetch, fetchAll } = require('../../lib/postgres')

const GET_FORWARD = `
	SELECT
		p.product_id,
		f.user_id,
		s.subcategory_id,
		p.subcategory_id,
		f.product_id,
		p.product_name,
		p.product_price,
		s.subcategory_name
	FROM
		forwards f
	INNER JOIN
		products p ON p.product_id = f.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	WHERE
		f.user_id = $1
`

const CHECK_EXISTING = `
	SELECT
		*
	FROM
		forwards
	WHERE
		product_id = $1
	AND
		user_id = $2
`

const ADD_FORWARD = `
	INSERT INTO
		forwards(product_id, user_id)
	VALUES($1, $2)
	RETURNING 
		forward_id
`

const DELETE_FROM_FORWARD = `
	DELETE FROM
		forwards
	WHERE
		product_id = $1
	AND
		user_id = $2
	RETURNING
		forward_id
`

const forwards 		= (userID) 				=> fetchAll(GET_FORWARD, userID)
const checkForward 	= (productID, userID) 	=> fetchAll(CHECK_EXISTING, productID, userID)
const addForward 	= (productID, userID) 	=> fetch(ADD_FORWARD, productID, userID)
const deleteForward = (productID, userID) 	=> fetch(DELETE_FROM_FORWARD, productID, userID)

module.exports = {
	forwards,
	checkForward,
	addForward,
	deleteForward
}