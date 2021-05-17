const { fetch, fetchAll } = require('../../../lib/postgres')

const NEW_PRODUCT = `
	INSERT INTO products(
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
	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)

	RETURNING product_id
`

const NEW_IMAGE = `
	INSERT INTO
		product_images(image_link, product_id)
	VALUES($1, $2)
	RETURNING 
		image_id
`

const NEW_FILTERED = `
	INSERT INTO
		filtered(product_id, filter_id)
	VALUES 
		($1, $2)
	RETURNING 
		filtered_id
`

const newFiltered = (productID, filterID) => fetch(NEW_FILTERED, productID, filterID)

const newProduct = (data) => fetch(
	NEW_PRODUCT, 
	data.name, 
	data.price, 
	data.categoryID, 
	data.subcategoryID, 
	data.subclassID, 
	data.isSale ? data.isSale : false, 
	data.isGift ? data.isGift : false, 
	data.isRecommended ? data.isRecommended : false, 
	data.isNew ? data.isNew : false, 
	data.isBest ? data.isBest : false, 
	data.saleAmount ? data.saleAmount : 0,
	data.amount,
	data.definition
)

const newImage = (url, productID) => fetch(NEW_IMAGE, url, productID)

module.exports = {
	newProduct,
	newImage,
	newFiltered
}