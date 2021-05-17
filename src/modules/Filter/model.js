const { fetch, fetchAll } = require('../../lib/postgres')

const FILTERS = `
	SELECT
		filtermain_id,
		filtermain_title
	FROM
		filters_main
	WHERE
		subcategory_id = $1
`

const NEW_FILTER = `
	INSERT INTO
		filters_main(filtermain_title, subcategory_id)
	VALUES($1, $2)
	RETURNING *
`

const DELETE_FILTER = `
	DELETE FROM
		filters_main
	WHERE
		filtermain_id = $1
	RETURNING *
`

const EDIT_FILTERS = `
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
`

const filters 		= (subcategoryID) 			=> fetchAll(FILTERS, subcategoryID)
const editFilters 	= (productID) 				=> fetchAll(EDIT_FILTERS, productID)
const newFilter 	= (title, subcategoryID) 	=> fetch(NEW_FILTER, title, subcategoryID)
const deletefilter 	= (filterID) 				=> fetch(DELETE_FILTER, filterID)

module.exports = {
	filters,
	editFilters,
	newFilter,
	deletefilter
}