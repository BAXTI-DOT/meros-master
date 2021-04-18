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

const filters = (subcategoryID) 	=> fetchAll(FILTERS, subcategoryID)

module.exports = {
	filters
}