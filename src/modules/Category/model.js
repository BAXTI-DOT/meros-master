const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORIES = `
	SELECT 
		*
	FROM
		categories
`

const BY_ID = `
	SELECT
		*
	FROM
		categories
	WHERE
		category_id = $1
`

const ADD_CATEGORY = `
	INSERT INTO 
		categories(category_name)
	VALUES
		($1)
	RETURNING
		category_id
`

const DELETE_CATEGORY = `
	DELETE
		FROM
	categories
	WHERE
		category_id = $1
	RETURNING
		category_id
`

const CATEGORY_NAME = `
	SELECT
		category_name
	FROM
		categories
	WHERE
		category_id = $1
`

const PRODUCT_COUNT = `
	SELECT
		count(product_id)
	FROM
		products
	WHERE
		category_id = $1
`

const NEW_PRODUCTS = `
	SELECT
		s.subcategory_id,
		p.category_id,
		p.subcategory_id,
		p.product_id,
		n.product_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		new_products n
	INNER JOIN
		products p ON p.product_id = n.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	WHERE
		p.category_id = $1
`

const GIFT_PRODUCTS = `
	SELECT
		s.subcategory_id,
		p.category_id,
		p.subcategory_id,
		p.product_id,
		g.product_id,
		s.subcategory_name,
		p.product_name,
		p.product_price
	FROM
		gift_products g
	INNER JOIN
		products p ON p.product_id = g.product_id
	INNER JOIN
		sub_categories s ON s.subcategory_id = p.subcategory_id
	WHERE
		p.category_id = $1
`

const NEW_PRODUCT_TITLE = `
	SELECT 
		title_id,
		title_name
	FROM
		new_products_title
	WHERE
		category_id = $1
`

const GIFT_PRODUCT_TITLE = `
	SELECT 
		title_id,
		title_name
	FROM
		gift_products_title
	WHERE
		category_id = $1
`

const categories 	 	= () 			=> fetchAll(CATEGORIES)
const byID		 	 	= (categoryID) 	=> fetch(BY_ID, categoryID)
const addCategory 	 	= (name) 		=> fetch(ADD_CATEGORY, name)
const deleteCategory 	= (categoryID) 	=> fetch(DELETE_CATEGORY, categoryID)
const name 			 	= (categoryID) 	=> fetch(CATEGORY_NAME, categoryID)
const productCount 	 	= (categoryID) 	=> fetch(PRODUCT_COUNT, categoryID)
const newProducts 	 	= (categoryID) 	=> fetchAll(NEW_PRODUCTS, categoryID)
const giftProducts 	 	= (categoryID) 	=> fetchAll(GIFT_PRODUCTS, categoryID)
const newProductTitle 	= (categoryID)  => fetch(NEW_PRODUCT_TITLE, categoryID)
const giftProductTitle 	= (categoryID)  => fetch(GIFT_PRODUCT_TITLE, categoryID)


module.exports = {
	categories,
	byID,
	addCategory,
	deleteCategory,
	name,
	productCount,
	newProducts,
	giftProducts,
	newProductTitle,
	giftProductTitle
}