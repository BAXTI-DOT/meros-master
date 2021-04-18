const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORY_NAME = `
	SELECT 
		c.category_id,
		s.category_id,
		s.subcategory_id,
		c.category_name,
		s.subcategory_name
	FROM
		sub_categories s
	INNER JOIN
		categories c ON c.category_id = s.category_id
	WHERE
		s.subcategory_id = $1
`

const SUBCATEGORIES = `
	SELECT
		subcategory_id,
		subcategory_name
	FROM
		sub_categories
	WHERE
		category_id = $1
`

const SUBCATEGORY_NAME = `
	SELECT
		subcategory_name
	FROM
		sub_categories
	WHERE
		subcategory_id = $1
`

const SORTED_PRODUCTS = `
	SELECT 
		p.product_id,
		c.category_id,
		p.subcategory_id,
		s.subcategory_id,
		p.subcategory_id,
		p.product_name,
		p.product_price,
		c.category_name
	FROM
		products p
	INNER JOIN
		categories c ON p.category_id = c.category_id
	INNER JOIN
		sub_categories s ON p.subcategory_id = s.subcategory_id
	WHERE
		p.subcategory_id = $1
	ORDER BY
		CASE WHEN $2 = 1 THEN p.product_price END ASC,
		CASE WHEN $2 = 2 THEN p.product_price END DESC,
		CASE WHEN $2 = 3 THEN p.product_name END ASC,
		CASE WHEN $2 = 4 THEN p.product_name END DESC,
	p.product_id DESC,
	p.product_price,
	p.product_name
	OFFSET 
		$3 
	FETCH FIRST $4 ROW ONLY
`

const SUB_CLASSES = `
	SELECT 
		subclass_id,
		subclass_name 
	FROM
		sub_classes
	WHERE
		subcategory_id = $1
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
	subcategory_id = $1
	RETURNING
		subcategory_id
`

const ALL = `
	SELECT
		subcategory_id,
		subcategory_name
	FROM
		sub_categories
`

const byID 				= (categoryID)					=> fetchAll(BY_ID, categoryID)
const name 				= (subcategoryID) 				=> fetch(SUBCATEGORY_NAME, subcategoryID)
const addSubcategory 	= (name, categoryID) 			=> fetch(ADD_SUB_CATEGORY, name, categoryID)
const deleteSubcategory = (subcategoryID)				=> fetch(DELETE_SUB_CATEGORY, subcategoryID)
const sortedProducts 	= (subcategoryID, sortStatus, page, limit) 	=> fetchAll(SORTED_PRODUCTS, subcategoryID, sortStatus, page, limit)
const subClasses		= (subcategoryID) 				=> fetchAll(SUB_CLASSES, subcategoryID)
const linkName 			= (subcategoryID) 				=> fetch(CATEGORY_NAME, subcategoryID)
const all 				= () 							=> fetchAll(ALL)
const subcategories 	= (categoryID) 					=> fetchAll(SUBCATEGORIES, categoryID)

module.exports = {
	byID,
	addSubcategory,
	deleteSubcategory,
	name,
	sortedProducts,
	subClasses,
	linkName,
	all,
	subcategories
}