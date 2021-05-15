const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORIES = `
	SELECT 
		*
	FROM
		categories
	ORDER BY 
		category_name
`

const BY_CATEGORY_ID = `
	SELECT
		category_id,
		category_name,
		is_navbar,
		is_popular
	FROM
		categories 
	WHERE
		category_id = $1
`

const BY_ID = `
	SELECT
		c.category_id,
		c.category_name,
		p.product_id,
		p.category_id
	FROM 
		categories c
	INNER JOIN
		products p ON p.category_id = c.category_id
	WHERE
		p.product_id = $1
`

const ADD_CATEGORY = `
	INSERT INTO 
		categories(category_name, is_navbar, is_popular)
	VALUES
		($1, $2, $3)
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

const UPDATE_CATEGORY = `
	UPDATE 
		categories
	SET
		category_name = $1,
		is_navbar = $3,
		is_popular = $4
	WHERE
		category_id = $2
	RETURNING
		category_id
`

const categories 	 	= () 			=> fetchAll(CATEGORIES)
const byID		 	 	= (productID) 	=> fetch(BY_ID, productID)
const addCategory 	 	= (name, isNavbar, isPopular) 		=> fetch(ADD_CATEGORY, name, isNavbar, isPopular)
const deleteCategory 	= (categoryID) 	=> fetch(DELETE_CATEGORY, categoryID)
const name 			 	= (categoryID) 	=> fetch(CATEGORY_NAME, categoryID)
const productCount 	 	= (categoryID) 	=> fetch(PRODUCT_COUNT, categoryID)
const updateCategory 	= async(categoryName, categoryID, isNavbar, isPopular) => {

	let oldCategory = await fetch(`SELECT * FROM categories WHERE category_id = $1`, categoryID)

	if(!oldCategory) throw new Error("No such category")

	return fetch(
		UPDATE_CATEGORY,
		categoryName ? categoryName : oldCategory.category_name,
		categoryID,
		isNavbar,
		isPopular
	)
}
const byCategoryID = (categoryID) => fetch(BY_CATEGORY_ID, categoryID)


module.exports = {
	categories,
	byID,
	addCategory,
	deleteCategory,
	name,
	productCount,
	updateCategory,
	byCategoryID
}