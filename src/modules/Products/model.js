const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS_TO_EDIT = `
	SELECT
		*
	FROM
		products
	WHERE
		product_id = $1
`

const ALL_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	ORDER BY
		product_name ASC
	OFFSET
		 $1 ROWS
	FETCH FIRST 
		$2 
	ROW ONLY
`

const CATEGORY_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		category_id = $1
	OFFSET
		$2 ROWS
	FETCH
		FIRST $3 ROW ONLY
`

const SUBCATEGORY_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		subcategory_id = $1
	OFFSET
		$2
	FETCH
		FIRST $3 ROW ONLY
`

const SUBCLASS_PRODUCTS = `
	SELECT
		product_id,
		product_name
	FROM
		products
	WHERE
		subclass_id = $1
	OFFSET
		$2
	FETCH
		FIRST $3 ROW ONLY
`
const COUNT				= `SELECT COUNT(product_id) p FROM products`
const CATEGORY_COUNT	= `SELECT COUNT(product_id) p FROM products WHERE category_id = $1` 
const SUBCATEGORY_COUNT	= `SELECT COUNT(product_id) p FROM products WHERE subcategory_id = $1`
const SUBCLASS_COUNT	= `SELECT COUNT(product_id) p FROM products WHERE subclass_id = $1`

const NEW_PRODUCT = `
	INSERT INTO products(
		product_id,
		product_name, 
		product_price,
		category_id,
		subcategory_id,
		subclass_id,
		is_sale,
		is_gift,
		is_recommended,
		is_new,
		is_best,
		sale_amount,
		product_amount,
		product_definition
	)
	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)

	RETURNING product_id
`

const UPDATE_PRODUCT = `
	UPDATE 
		products
	SET
		product_name = $1,
		product_price = $2,
		category_id = $3,
		subcategory_id = $4,
		subclass_id = $5,
		is_sale = $6,
		is_gift = $7,
		is_recommended = $8,
		is_new = $9,
		is_best = $10,
		sale_amount = $11,
		product_amount = $12,
		product_definition = $13
	WHERE
		product_id = $14
	RETURNING
		product_id
`
const DELETE_PRODUCT = `
	DELETE
		FROM
	products
	WHERE
		product_id = $1
	RETURNING
		product_id
`

const category 			= (categoryID, page, limit) 		=> fetchAll(CATEGORY_PRODUCTS, categoryID, (page - 1) * limit, limit)
const subcategory 		= (subcategoryID, page, limit) 		=> fetchAll(SUBCATEGORY_PRODUCTS, subcategoryID, (page - 1) * limit, limit)
const subclass 			= (subclassID, page, limit) 		=> fetchAll(SUBCLASS_PRODUCTS, subclassID, (page - 1) * limit, limit)
const many				= (page, limit)						=> fetchAll(ALL_PRODUCTS, (page - 1) * limit, limit)
const count				= async limit						=> Math.ceil((await fetch(COUNT)).p / limit)
const categoryCount		= async (limit, categoryID)						=> Math.ceil((await fetch(CATEGORY_COUNT, categoryID)).p / limit)
const subcategoryCount	= async (limit, subcategoryID)						=> Math.ceil((await fetch(SUBCATEGORY_COUNT, subcategoryID)).p / limit)
const subclassCount		= async (limit, subclassID)						=> Math.ceil((await fetch(SUBCLASS_COUNT, subclassID)).p / limit)
const createProduct = (
		productID,
		name, 
		price, 
		categoryID, 
		subcategoryID, 
		subclassID, 
		isSale, 
		isGift, 
		isRecommended, 
		isNew, 
		isBest, 
		saleAmount, 
		amount,
		definition
	) => fetch(
		NEW_PRODUCT, 
		productID,
		name, 
		price, 
		categoryID, 
		subcategoryID, 
		subclassID, 
		isSale ? isSale : false, 
		isGift ? isGift : false, 
		isRecommended ? isRecommended : false, 
		isNew ? isNew : false, 
		isBest ? isBest : false, 
		saleAmount ? saleAmount : 0,
		amount,
		definition
	)

const updateProduct = async(productID, name, price, categoryID, subcategoryID, subclassID, 	isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition) => {

	const oldProduct = await fetch('SELECT * FROM products WHERE product_id = $1', productID)

	if(!oldProduct) throw "No such product!!"

	console.log(productID, name, price, categoryID, subcategoryID, subclassID, 	isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition)

	return fetch(
		UPDATE_PRODUCT, 
		name ? name : oldProduct.product_name,
		price ? price : oldProduct.product_price,
		categoryID ? categoryID : oldProduct.category_id,
		subcategoryID ? subcategoryID : oldProduct.subcategory_id,
		subclassID ? subclassID : oldProduct.subclass_id,
		isSale ? isSale : oldProduct.is_sale,
		isGift ? isGift : oldProduct.is_gift,
		isRecommended ? isRecommended : oldProduct.is_recommended,
		isNew ? isNew : oldProduct.is_new,
		isBest ? isBest : oldProduct.is_best,
		sale ? sale : oldProduct.sale_amount,
		amount ? amount : oldProduct.product_amount,
		definition ? definition : oldProduct.product_definition,
		productID
	)

}

const editProduct 	= (productID) => fetch(PRODUCTS_TO_EDIT, productID)
const deleteProduct = (productID) => fetch(DELETE_PRODUCT, productID)

module.exports = {
	many,
	category,
	subcategory,
	subclass,
	count,
	createProduct,
	categoryCount,
	subcategoryCount,
	subclassCount,
	updateProduct,
	editProduct,
	deleteProduct
}