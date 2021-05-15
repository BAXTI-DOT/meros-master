const { fetch, fetchAll } = require('../../lib/postgres')

const IMAGE_PRODUCTS = `
	SELECT
		image_id,
		image_link
	FROM
		product_images
	WHERE
		product_id = $1
`

const INSERT_IMAGE = `
	INSERT INTO
		product_images(image_link, image_path, mimetype, product_id, image_name)
	VALUES($1, $2, $3, $4, $5)
	RETURNING 
		image_id
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

const image = (productID) => fetch(IMAGE_PRODUCTS, productID)
const newImage = (url, path, mimetype, id, name) => fetch(INSERT_IMAGE, url, path, mimetype, id, name)
const updateImage = (url, path, mimetype, name, imageID) => fetch(UPDATE_IMAGE, url, path, mimetype, name, imageID)

module.exports = {
	image,
	newImage,
	updateImage
}