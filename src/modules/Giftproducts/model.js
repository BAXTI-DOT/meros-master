const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
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

const BY_ID = `
	SELECT
		*
	FROM
		gift_products
	WHERE
		product_id = $1
`

const BY_NAME = `
	SELECT
		*
	FROM
		gift_products_title
	WHERE
		title_name = $1
`

const BY_TITLE_ID = `
	SELECT
		*
	FROM
		gift_products_title
	WHERE
		title_id = $1
`

const BY_TITLE_CATEGORY_ID = `
	SELECT
		*
	FROM
		gift_products_title
	WHERE
		category_id = $1
`

const ADD_PRODUCT = `
	INSERT INTO
		gift_products(product_id)
	VALUES($1)
	RETURNING
		giftproduct_id
`

const DELETE_PRODUCT = `
	DELETE
		FROM
	gift_products
		WHERE
	product_id = $1
`

const TITLE = `
	SELECT 
		title_id,
		title_name
	FROM
		gift_products_title
	WHERE
		category_id = $1
`

const ADD_TITLE = `
	INSERT INTO
		gift_products_title(title_name, category_id)
	VALUES($1, $2)
	RETURNING
		title_id
`

const CHANGE_TITLE = `
	UPDATE
		gift_products_title
	SET
		title_name = $1
	WHERE
		title_id = $2
	RETURNING
		title_id
`

const DELETE_TITLE = `
	DELETE FROM
		gift_products_title
	WHERE
		title_id = $1	
	RETURNING
		title_id
`

const products 	 		= (categoryID) 				=> fetchAll(PRODUCTS, categoryID)
const byId 				= (productID) 				=> fetchAll(BY_ID, productID)
const byName 			= (titleName) 				=> fetchAll(BY_NAME, titleName)
const byTitleID 		= (titleID) 				=> fetchAll(BY_TITLE_ID, titleID)
const addProduct 		= (productID) 				=> fetch(ADD_PRODUCT, productID)
const deleteProduct 	= (productID) 				=> fetch(DELETE_PRODUCT, productID)
const productTitle 		= (categoryID)  			=> fetch(TITLE, categoryID)
const addTitle 			= (titleName, categoryID) 	=> fetch(ADD_TITLE, titleName, categoryID)
const byTitCat 			= (categoryID) 				=> fetchAll(BY_TITLE_CATEGORY_ID, categoryID)
const changeTitle 		= (titleName, titleID) 		=> fetch(CHANGE_TITLE, titleName, titleID)
const deleteTitle 		= (titleID) 				=> fetch(DELETE_TITLE, titleID)


module.exports = {
	products,
	byId,
	byName,
	byTitleID,
	addProduct,
	deleteProduct,
	productTitle,
	addTitle,
	changeTitle,
	deleteTitle,
	byTitCat
}