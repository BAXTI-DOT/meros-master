const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCT_DETAILS = `
	SELECT
		m.filtermain_id,
		d.filtermain_id,
		d.filterdetail_id,
		f.filtered_id,
		f.filter_id,
		f.product_id,
		m.filtermain_title,
		d.filterdetail_title
	FROM
		filtered f
	INNER JOIN
		filter_details d ON d.filterdetail_id = f.filter_id
	INNER JOIN
		filters_main m ON m.filtermain_id = d.filtermain_id
	WHERE
		f.product_id = $1
`

const productDetail = (productID) => fetchAll(PRODUCT_DETAILS, productID)

module.exports = {
	productDetail
}