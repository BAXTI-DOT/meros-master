const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_SUB_CLASSES = `
	SELECT
		subclass_id,
		subclass_name
	FROM
		sub_classes

`

const BY_ID = `
	SELECT
		subclass_id,
		subclass_name
	FROM
		sub_classes
	WHERE
		category_id = $1
	AND
		subcategory_id = $2
`

const BY_CATEGORY_ID = `
	SELECT
		subclass_id,
		subclass_name
	FROM
		sub_classes
	WHERE
		category_id = $1
`

const ADD_SUB_CLASS = `
	INSERT INTO
		sub_classes(subclass_name, subcategory_id, category_id)
	VALUES($1, $2, $3)
	RETURNING subclass_id
`

const DELETE_SUB_CLASS = `
	DELETE
		FROM
	sub_classes
		WHERE
	subclass_id = $1
	RETURNING
		subclass_id
`

const SUB_CLASS_NAME = `
	SELECT
		subclass_name
	FROM
		sub_classes
	WHERE
		subclass_id = $1
`

const SUB_CLASS_LINK = `
	SELECT
		c.category_id,
		sub.category_id,
		s.subcategory_id,
		sub.subcategory_id,
		sub.subclass_id,
		c.category_name,
		s.subcategory_name,
		sub.subclass_name
	FROM
		sub_classes sub
	INNER JOIN
		categories c ON c.category_id = sub.category_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = sub.subcategory_id
	WHERE
		sub.subclass_id = $1
`

const SORTED_PRODUCTS = `
	SELECT
		p.product_id,
		p.subcategory_id,
		p.subclass_id,
		s.subcategory_id,
		sub.subclass_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		products p
	INNER JOIN
		sub_categories s ON p.subcategory_id = s.subcategory_id
	INNER JOIN
		sub_classes sub ON p.subclass_id = sub.subclass_id
	WHERE
		p.subclass_id = $1
	ORDER BY
		CASE WHEN $2 = 1 THEN p.product_price END ASC,
		CASE WHEN $2 = 2 THEN p.product_price END DESC,
		CASE WHEN $2 = 3 THEN p.product_name END ASC,
		CASE WHEN $2 = 4 THEN p.product_name END DESC,
	p.product_id DESC,
	p.product_name,
	p.product_price
	OFFSET $3 FETCH FIRST $4 ROW ONLY
`

const UNSORTED_PRODUCTS = `
	SELECT
		p.product_id,
		p.subcategory_id,
		p.subclass_id,
		s.subcategory_id,
		sub.subclass_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		products p
	INNER JOIN
		sub_categories s ON p.subcategory_id = s.subcategory_id
	INNER JOIN
		sub_classes sub ON p.subclass_id = sub.subclass_id
	WHERE
		p.subclass_id = $1
	OFFSET $2 FETCH FIRST $3 ROW ONLY
`

const all				= () 									=> fetchAll(ALL_SUB_CLASSES)
const byID 				= (categoryID, subcategoryID) 			=> fetchAll(BY_ID, categoryID, subcategoryID)
const addSubClass 		= (name, subcategoryID, categoryID) 	=> fetch(ADD_SUB_CLASS, name, subcategoryID, categoryID)
const deleteSubclass 	= (subclassID) 							=> fetch(DELETE_SUB_CLASS, subclassID)
const name 				= (subclassID) 							=> fetch(SUB_CLASS_NAME, subclassID)
const link 				= (subclassID) 							=> fetch(SUB_CLASS_LINK, subclassID)
const sorted 			= (subclassID, sortStatus, page, limit) => fetchAll(SORTED_PRODUCTS, subclassID, sortStatus, page, limit)
const byCategory 		= (categoryID) 							=> fetchAll(BY_CATEGORY_ID, categoryID)

module.exports = {
	all,
	byID,
	addSubClass,
	deleteSubclass,
	name,
	link,
	sorted,
	byCategory
}