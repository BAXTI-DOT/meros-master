const { fetch, fetchAll } = require('../../lib/postgres')

const GENERATE_ID = `
	SELECT
		uuid_generate_v4()
`

const generate = () => fetch(GENERATE_ID)

module.exports = {
	generate
}