const { fetch, fetchAll } = require('../../lib/postgres')

const OLD_DETAILS = `
	SELECT
		m.filtermain_title,
		m.filtermain_id,
		d.filterdetail_title,
		d.filtermain_id,
		d.filterdetail_id,
		f.product_id,
		f.filter_id,
		f.filtered_id,
		f.product_id
	FROM
		filtered f
	INNER JOIN
		filter_details d ON d.filterdetail_id = f.filter_id
	INNER JOIN
		filters_main m ON m.filtermain_id = d.filtermain_id
	WHERE
		f.product_id = $1
	AND
		m.filtermain_id = $2
`

const oldDetails 	= (productID, filterID) => fetch(OLD_DETAILS, productID, filterID)

module.exports = {
	oldDetails
}