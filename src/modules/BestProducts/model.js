const { fetch, fetchAll } = require('../../lib/postgres')

const BEST_PRODUCTS = `
	SELECT
		c.category_id,
		p.category_id,
		p.product_id,
		c.category_name,
		p.product_name,
		p.product_price,
		p.is_best,
		p.sale_amount,
		i.image_link
	FROM
		products p
	INNER JOIN
		categories c ON c.category_id = p.category_id
	INNER JOIN
		product_images i ON p.product_id = i.product_id
	WHERE
		p.is_best = true
`

const products = () => fetchAll(BEST_PRODUCTS)

module.exports = {
	products
}