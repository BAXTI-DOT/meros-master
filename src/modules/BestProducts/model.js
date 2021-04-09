const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
	SELECT
		s.subcategory_id,
		p.category_id,
		p.subcategory_id,
		p.product_id,
		b.product_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		best_offers b
	INNER JOIN
		products p ON p.product_id = b.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
`

const BY_ID = `
	SELECT
		*
	FROM
		best_offers
	WHERE
		product_id = $1
`


const ADD_PRODUCT = `
	INSERT INTO
		best_offers(product_id)
	VALUES($1)
	RETURNING
		bestoffer_id
`

const DELETE_PRODUCT = `
	DELETE
		FROM
	best_offers
		WHERE
	product_id = $1
	RETURNING
		bestoffer_id
`

const products 	 		= () 						=> fetchAll(PRODUCTS)
const byId 				= (productID) 				=> fetchAll(BY_ID, productID)
const addProduct 		= (productID) 				=> fetch(ADD_PRODUCT, productID)
const deleteProduct 	= (productID) 				=> fetch(DELETE_PRODUCT, productID)

module.exports = {
	products,
	byId,
	addProduct,
	deleteProduct,
}