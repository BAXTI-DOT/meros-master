const { fetch, fetchAll } = require('../../lib/postgres')

const FILTER_DETAILS = `
	SELECT
		filterdetail_id,
		filterdetail_title
	FROM
		filter_details
	WHERE
		filtermain_id = $1
`

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

const CREATE_DETAIL = `
	INSERT INTO
		filter_details(filterdetail_title, filtermain_id)
	VALUES($1, $2)
	RETURNING *
`

const filterDetail 	= (filterID) 				=> fetchAll(FILTER_DETAILS, filterID)
const oldDetails 	= (productID, filterID) 	=> fetchAll(OLD_DETAILS, productID, filterID)
const newDetail 	= (title, filterID) 		=> fetch(CREATE_DETAIL, title, filterID)

module.exports = {
	filterDetail,
	oldDetails,
	newDetail
}