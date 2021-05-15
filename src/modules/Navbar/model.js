const { fetch, fetchAll } = require('../../lib/postgres')

const NAVBAR = `
	SELECT
		category_id,
		category_name
	FROM
		categories
	WHERE
		is_navbar = true
`

const POPULAR = `
	SELECT
		category_id,
		category_name
	FROM
		categories
	WHERE
		is_popular = true
`

const navbar 	= () => fetchAll(NAVBAR)
const popular 	= () => fetchAll(POPULAR)

module.exports = {
	navbar,
	popular
}