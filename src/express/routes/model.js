const { fetch, fetchAll } = require('../../lib/postgres')

const INSERT_UPLOADED_FILE = `
	INSERT INTO
		product_images(image_link, image_path, mimetype, product_id, image_name)
	VALUES($1, $2, $3, $4, $5)
	RETURNING 
		image_id
`

const FILTERED = `
	INSERT INTO 
		filtered(product_id, filter_id)
	VALUES($1, $2)
	RETURNING
		filtered_id
`

const UPDATE_FILTERED = `
	UPDATE 
		filtered
	SET
		filter_id = $1
	WHERE
		filtered_id = $2
	RETURNING
		product_id
`

const UPDATE_IMAGE = `
	UPDATE
		product_images
	SET
		image_link = $1,
		image_path = $2,
		mimetype = $3,
		image_name = $4
	WHERE
		image_id = $5
	RETURNING
		image_id
`

const SUBCATEGORY_PRODUCTS = `
	SELECT
		f.filtered_id,
		f.product_id,
		f.filter_id,
		p.product_id,
		p.category_id,
		c.category_id,
		c.category_name,
		p.product_name,
		p.sale_amount,
		p.product_price,
		i.product_id,
		i.image_link
	FROM
		filtered f
	INNER JOIN
		products p ON f.product_id = p.product_id
	INNER JOIN
		categories c ON c.category_id = p.category_id
	INNER JOIN
		product_images i ON i.product_id = p.product_id
	WHERE
		f.filter_id = $1
`

const SUBCLASS_PRODUCTS = `
	SELECT
		f.filtered_id,
		f.product_id,
		f.filter_id,
		p.product_id,
		p.category_id,
		c.category_id,
		c.category_name,
		p.product_name,
		p.sale_amount,
		p.product_price,
		i.product_id,
		i.image_link,
		p.subclass_id
	FROM
		filtered f
	INNER JOIN
		products p ON f.product_id = p.product_id
	INNER JOIN
		categories c ON c.category_id = p.category_id
	INNER JOIN
		product_images i ON i.product_id = p.product_id
	WHERE
		p.subclass_id = $2
	AND
		f.filter_id = $1
`

const insertfile 	= (link, path, mimetype, productID, imageName) => fetch(INSERT_UPLOADED_FILE, link, path, mimetype, productID, imageName)
const makeFilter 	= (productID, filterID) => fetch(FILTERED, productID, filterID)
const updateFilter 	= ( filterID, filteredID) => fetch(UPDATE_FILTERED, filterID, filteredID)
const updateImage 	= (link, path, mimetype, imageName, imageID) => fetch(UPDATE_IMAGE, link, path, mimetype, imageName, imageID)
const filtered 		= (filterID) => fetchAll(SUBCATEGORY_PRODUCTS, filterID)
const filteredSubclass = (filterID, subclassID) => fetchAll(SUBCLASS_PRODUCTS, filterID, subclassID)

module.exports = {
	insertfile,
	makeFilter,
	updateFilter,
	updateImage,
	filteredSubclass,
	filtered
}