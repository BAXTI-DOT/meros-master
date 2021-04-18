const { fetch, fetchAll } = require('../../lib/postgres')

const NAVBAR = `
	SELECT
		n.navbar_id,
		n.category_id,
		c.category_id,
		c.category_name
	FROM
		navbar n
	INNER JOIN
		categories c ON n.category_id = c.category_id
`

const ADD_TO_NAVBAR = `
	INSERT INTO
		navbar(category_id)
	VALUES($1)
	RETURNING navbar_id
`

const BY_ID = `
	SELECT
		*
	FROM
		navbar
	WHERE
		category_id = $1
`

const DELETE = `
	DELETE FROM
		navbar
	WHERE
		category_id = $1
	RETURNING
		navbar_id
`

const navbar		= () 			=> fetchAll(NAVBAR)
const addToNavbar 	= (categoryID) 	=> fetch(ADD_TO_NAVBAR, categoryID)
const byID 			= (categoryID) 	=> fetchAll(BY_ID, categoryID)
const deleteFrom 	= (categoryID) 	=> fetch(DELETE, categoryID)

module.exports = {
	navbar,
	addToNavbar,
	byID,
	deleteFrom
}