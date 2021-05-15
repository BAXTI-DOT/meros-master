const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
	SELECT
		s.subcategory_id,
		p.category_id,
		p.subcategory_id,
		p.product_id,
		s.subcategory_name,
		p.product_name,
		p.product_price,
		p.sale_amount,
		p.is_new,
		i.image_link,
		i.product_id
	FROM
		products p
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	INNER JOIN
		product_images i ON p.product_id = i.product_id
	WHERE
		p.is_new = true
	AND
		p.category_id = $1
`

const newProducts 	= (categoryID) 	=> fetchAll(PRODUCTS, categoryID)


module.exports = {
	newProducts
}