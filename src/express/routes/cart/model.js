const { fetch, fetchAll } = require('../../../lib/postgres')

const ADD_CART = `
	INSERT INTO
		cart(product_id, product_count, user_id)
	VALUES($1, $2, $3)
		RETURNING *
`

const CHECK_EXISTING = `
	SELECT
		*
	FROM
		cart
	WHERE
		product_id = $1
`

const UPDATE_CART = `
	UPDATE
		cart
	SET
		product_count = product_count + 1
	WHERE
		product_id = $1
	RETURNING
		*
`

const UPDATE_MINUS = `
	UPDATE
		cart
	SET
		product_count = product_count - 1
	WHERE
		product_id = $1
	RETURNING
		*
`

const GET_PRODUCTS = `
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
		c.product_count,
		i.image_link,
		i.product_id
	FROM
		cart c
	INNER JOIN
		products p ON c.product_id = p.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	INNER JOIN
		users u ON u.user_id = c.user_id
	INNER JOIN
		product_images i ON p.product_id = i.product_id
	WHERE
		c.user_id = $1
`

const GET_CART_SUM = `
	SELECT
		sum(c.product_count * p.product_price),
		c.user_id
	FROM
		cart c
	NATURAL JOIN
		products p
	WHERE
		c.user_id = $1
	GROUP BY c.user_id
`

const DELETE = `
	DELETE FROM
	 	cart
	 WHERE
	 	product_id = $1
	 AND
	 	user_id = $2
	 RETURNING 	
	 	*
`

const newCart 		= (id, count, userId) 	=> fetch(ADD_CART, id, count, userId)
const check 		= (productID) 			=> fetchAll(CHECK_EXISTING, productID)
const updateCart 	= (productID) 			=> fetch(UPDATE_CART, productID)
const getProducts 	= (userId) 				=> fetchAll(GET_PRODUCTS, userId)
const updatePlus 	= (productID) 			=> fetch(UPDATE_CART, productID)
const updateMinus 	= (productID) 			=> fetch(UPDATE_MINUS, productID)
const sum 			= (userId) 				=> fetch(GET_CART_SUM, userId)
const deleteCart 	= (productID, userId) 	=> fetch(DELETE, productID, userId) 

module.exports = {
	newCart,
	check,
	updateCart,
	getProducts,
	updatePlus,
	updateMinus,
	sum,
	deleteCart
}