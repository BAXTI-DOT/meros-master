const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	ORDER BY
		product_name ASC
`

const CATEGORY_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		category_id = $1
`

const SUBCATEGORY_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		subcategory_id = $1
`

const SUBCLASS_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		subclass_id = $1
`

const all 			= () 				=> fetchAll(ALL_PRODUCTS)
const category 		= (categoryID) 		=> fetchAll(CATEGORY_PRODUCTS, categoryID)
const subcategory 	= (subcategoryID) 	=> fetchAll(SUBCATEGORY_PRODUCTS, subcategoryID)
const subclass 		= (subclassID) 		=> fetchAll(SUBCLASS_PRODUCTS, subclassID)

module.exports = {
	all,
	category,
	subcategory,
	subclass
}