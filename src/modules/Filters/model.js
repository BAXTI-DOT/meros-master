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

const filterDetail = (filterID) => fetchAll(FILTER_DETAILS, filterID)

module.exports = {
	filterDetail
}