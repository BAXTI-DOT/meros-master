const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
	SELECT
		s.subcategory_id,
		p.category_id,
		p.subcategory_id,
		p.product_id,
		r.product_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		recommended_products r
	INNER JOIN
		products p ON p.product_id = r.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
`

const BY_ID = `
	SELECT
		*
	FROM
		recommended_products
	WHERE
		product_id = $1
`


const ADD_PRODUCT = `
	INSERT INTO
		recommended_products(product_id)
	VALUES($1)
	RETURNING
		recommended_id
`

const DELETE_PRODUCT = `
	DELETE
		FROM
	recommended_products
		WHERE
	product_id = $1
	RETURNING
		recommended_id
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