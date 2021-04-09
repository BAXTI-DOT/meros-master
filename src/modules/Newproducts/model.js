const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
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

const BY_ID = `
	SELECT
		*
	FROM
		new_products
	WHERE
		product_id = $1
`

const BY_NAME = `
	SELECT
		*
	FROM
		new_products_title
	WHERE
		title_name = $1
`

const BY_TITLE_ID = `
	SELECT
		*
	FROM
		new_products_title
	WHERE
		title_id = $1
`

const BY_TITLE_CATEGORY_ID = `
	SELECT
		*
	FROM
		new_products_title
	WHERE
		category_id = $1
`

const ADD_PRODUCT = `
	INSERT INTO
		new_products(product_id)
	VALUES($1)
	RETURNING
		newproduct_id
`

const DELETE_PRODUCT = `
	DELETE
		FROM
	new_products
		WHERE
	product_id = $1
	RETURNING
		newproduct_id
`

const TITLE = `
	SELECT 
		title_id,
		title_name
	FROM
		new_products_title
	WHERE
		category_id = $1
`

const ADD_TITLE = `
	INSERT INTO
		new_products_title(title_name, category_id)
	VALUES($1, $2)
	RETURNING
		title_id
`

const CHANGE_TITLE = `
	UPDATE
		new_products_title
	SET
		title_name = $1
	WHERE
		title_id = $2
	RETURNING
		title_id
`

const DELETE_TITLE = `
	DELETE FROM
		new_products_title
	WHERE
		title_id = $1	
	RETURNING
		title_id
`

const newProducts 	 	= (categoryID) 				=> fetchAll(PRODUCTS, categoryID)
const newProductTitle 	= (categoryID)  			=> fetch(TITLE, categoryID)
const byId 				= (productID) 				=> fetchAll(BY_ID, productID)
const byName 			= (titleName) 				=> fetchAll(BY_NAME, titleName)
const byTitleID 		= (titleID) 				=> fetchAll(BY_TITLE_ID, titleID)
const byTitCat 			= (categoryID) 				=> fetchAll(BY_TITLE_CATEGORY_ID, categoryID)
const addProduct 		= (productID) 				=> fetch(ADD_PRODUCT, productID)
const deleteProduct 	= (productID) 				=> fetch(DELETE_PRODUCT, productID)
const addTitle 			= (titleName, categoryID) 	=> fetch(ADD_TITLE, titleName, categoryID)
const changeTitle 		= (titleName, titleID) 		=> fetch(CHANGE_TITLE, titleName, titleID)
const deleteTitle 		= (titleID) 				=> fetch(DELETE_TITLE, titleID)

module.exports = {
	newProducts,
	newProductTitle,
	byId,
	byName,
	byTitleID,
	addProduct,
	deleteProduct,
	addTitle,
	changeTitle,
	deleteTitle,
	byTitCat
}