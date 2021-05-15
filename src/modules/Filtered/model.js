const { fetch, fetchAll } = require('../../lib/postgres')

const NEW_FILTERED = `
	INSERT INTO
		filtered(product_id, filter_id)
	VALUES 
		($1, $2)
	RETURNING 
		filtered_id
`

const newFiltered = (productID, filterID) => fetchAll(NEW_FILTERED, productID, filterID)

module.exports = {
	newFiltered
}