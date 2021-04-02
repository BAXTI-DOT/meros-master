const { fetch, fetchAll } = require('../../lib/postgres')

const SUBCATEGORIES = `
	SELECT
		subcategory_id,
		subcategory_name
	FROM
		sub_categories
`

const BY_ID = `
	SELECT
		subcategory_id,
		subcategory_name
	FROM
		sub_categories
	WHERE
		category_id = $1
`

const ADD_SUB_CATEGORY = `
	INSERT INTO
		sub_categories(subcategory_name, category_id)
	VALUES($1, $2)
	RETURNING 
		subcategory_id
`

const DELETE_SUB_CATEGORY = `
	DELETE
		FROM
	sub_categories
		WHERE
	subcategory_name = $1
		AND
	category_id = $2
	RETURNING
		subcategory_id
`

const all 				= () 					=> fetchAll(SUBCATEGORIES)
const byID 				= (categoryID)			=> fetchAll(BY_ID, categoryID)
const addSubcategory 	= (name, categoryID) 	=> fetch(ADD_SUB_CATEGORY, name, categoryID)
const deleteSubcategory = (name, categoryID)	=> fetch(DELETE_SUB_CATEGORY, name, categoryID)

module.exports = {
	all,
	byID,
	addSubcategory,
	deleteSubcategory
}