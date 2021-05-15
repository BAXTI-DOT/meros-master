const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
	SELECT
		p.product_id,
		p.product_name,
		p.product_price,
		p.product_definition,
		i.product_id,
		i.image_link
	FROM
		products p
	INNER JOIN
		product_images i ON p.product_id = i.product_id
	WHERE
		p.product_id = $1
`

const PRODUCT_LINK = `
	SELECT
		p.product_id,
		p.category_id,
		c.category_id,
		p.subcategory_id,
		s.subcategory_id,
		p.subclass_id,
		sub.subclass_id,
		c.category_name,
		s.subcategory_name,
		sub.subclass_name
	FROM
		products p
	INNER JOIN 
		categories c ON p.category_id = c.category_id
	INNER JOIN
		sub_categories s ON p.subcategory_id = s.subcategory_id
	INNER JOIN
		sub_classes sub ON p.subclass_id = sub.subclass_id
	WHERE
		p.product_id = $1
`

const getProducts 	= (productID) => fetch(PRODUCTS, productID)
const getLink 		= (productID) => fetch(PRODUCT_LINK, productID)

module.exports = {
	getProducts,
	getLink
}