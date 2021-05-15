const { fetch, fetchAll } = require('../../lib/postgres')

const GET_CART_PRODUCTS = `
	SELECT
		o.order_detail_id,
		o.product_id,
		p.product_id,
		o.order_id,
		p.product_name,
		p.product_price,
		o.product_count,
		i.image_link,
		i.product_id
	FROM
		order_details o
	INNER JOIN
		products p ON o.product_id = p.product_id
	INNER JOIN
		product_images i ON o.product_id = i.product_id
	WHERE
		o.order_id = $1
`

const getProducts = (orderID) => fetchAll(GET_CART_PRODUCTS, orderID)


module.exports = {
	getProducts
}