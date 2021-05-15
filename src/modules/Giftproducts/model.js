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
		p.is_gift
	FROM
		products p
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	WHERE
		p.is_gift = true
	AND
		p.category_id = $1
`
const products = (categoryID) => fetchAll(PRODUCTS, categoryID)


module.exports = {
	products
}