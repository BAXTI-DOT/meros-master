const { fetch, fetchAll } = require('../../lib/postgres')

const SUBCLASSES = `
	SELECT
		subclass_id,
		subclass_name
	FROM
		sub_classes
	ORDER BY 
		subclass_name 
	ASC
`

const subclasses = () => fetchAll(SUBCLASSES)

module.exports = {
	subclasses
}