const { fetch, fetchAll } = require('../../lib/postgres')

const GET_CART_PRODUCTS = `
	SELECT
		c.cart_id,
		c.product_id,
		c.user_id,
		p.product_id,
		p.subcategory_id,
		s.subcategory_id,
		u.user_id,
		s.subcategory_name,
		p.product_name,
		p.product_price,
		c.product_count
	FROM
		cart c
	INNER JOIN
		products p ON c.product_id = p.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	INNER JOIN
		users u ON u.user_id = c.user_id
	WHERE
		c.user_id = $1
`

const ADD_TO_CART = `
	INSERT INTO
		cart(product_id, product_count, user_id)
	VALUES($1, $2, $3)
	RETURNING 
		cart_id
`

const DELETE_FROM_CART = `
	DELETE FROM
		cart
	WHERE
		product_id = $1
	AND
		user_id = $2
	RETURNING
		cart_id
`

const CHECK_EXISTING = `
	SELECT
		*
	FROM
		cart
	WHERE
		product_id = $1
	AND
		user_id = $2
`

const UPDATE_CART = `
	UPDATE
		cart
	SET 
		product_count = product_count + $1
	WHERE
		product_id = $2
	AND
		user_id = $3
	RETURNING
		cart_id
`

const getProducts		= (userID) 							=> fetchAll(GET_CART_PRODUCTS, userID)
const addToCart 		= (productID, productCount, userID) => fetch(ADD_TO_CART, productID, productCount, userID)
const deleteFromCart 	= (productID, userID) 				=> fetch(DELETE_FROM_CART, productID, userID)
const checkExisting 	= (productID, userID) 				=> fetchAll(CHECK_EXISTING, productID, userID)
const updateCount 		= (productCount, productID, userID) => fetch(UPDATE_CART, productCount, productID, userID)

module.exports = {
	getProducts,
	addToCart,
	deleteFromCart,
	checkExisting,
	updateCount
}