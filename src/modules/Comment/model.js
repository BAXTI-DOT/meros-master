const { fetch, fetchAll } = require('../../lib/postgres')

const COMMENTS = `
	SELECT 
		* 
	FROM
		comments
`

const BY_PRODUCT_ID = `
	SELECT
		c.comment_id,
		c.comment_body,
		c.comment_rate,
		c.product_id,
		c.user_id,
		u.user_id,
		u.user_name,
		c.created_at
	FROM
		comments c
	INNER JOIN
		users u ON c.user_id = u.user_id
	WHERE
		c.product_id = $1
	OFFSET 
		$2
	FETCH FIRST $3 ROW ONLY

`

const ADD_COMMENT = `
	INSERT INTO 
		comments (comment_body, comment_rate, product_id, user_id, created_at) 
	VALUES 
		($1, $2, $3, $4, $5)
	RETURNING
		comment_id
`

const FIRST_STAR = `
	SELECT
		count(comment_rate)
	FROM
		comments
	WHERE
		comment_rate = 1
	AND
		product_id = $1
`

const SECOND_STAR = `
	SELECT
		count(comment_rate)
	FROM
		comments
	WHERE
		comment_rate = 2
	AND
		product_id = $1
`

const THIRD_STAR = `
	SELECT
		count(comment_rate)
	FROM
		comments
	WHERE
		comment_rate = 3
	AND
		product_id = $1
`

const FOURTH_STAR = `
	SELECT
		count(comment_rate)
	FROM
		comments
	WHERE
		comment_rate = 4
	AND
		product_id = $1
`

const FIFTH_STAR = `
	SELECT
		count(comment_rate)
	FROM
		comments
	WHERE
		comment_rate = 5
	AND
		product_id = $1
`

const ALL_COUNT = `
	SELECT 
		count(comment_id) 
	FROM 
		comments 
	WHERE 
		product_id = $1
`

const GET_DATE = `
	SELECT 
		date(created_at) 
	FROM 
		comments
	WHERE 
		comment_id = $1

`

const COUNT	= `SELECT COUNT(comment_id) c FROM comments WHERE product_id = $1`

const comments 		= () 									=> fetchAll(COMMENTS)
const byProductID 	= (productID, page, limit) 				=> fetchAll(BY_PRODUCT_ID, productID, (page - 1) * limit, limit)
const count			= async (limit, productID)				=> Math.ceil((await fetch(COUNT, productID)).c / limit)
const createComment = (body, rate, productID, userId, date) => fetch(ADD_COMMENT, body, rate, productID, userId, date)
const firstStar 	= (productID) 							=> fetch(FIRST_STAR, productID)
const secondStar  	= (productID) 							=> fetch(SECOND_STAR, productID)
const thirdStar  	= (productID) 							=> fetch(THIRD_STAR, productID)
const fourthStar  	= (productID) 							=> fetch(FOURTH_STAR, productID)
const fifthStar  	= (productID) 							=> fetch(FIFTH_STAR, productID)
const allCount 		= (productID) 							=> fetch(ALL_COUNT, productID)
const getDate  		= (commentID) 							=> fetch(GET_DATE, commentID)

module.exports = {
	comments,
	byProductID,
	count,
	createComment,
	firstStar,
	secondStar,
	thirdStar ,
	fourthStar,
	fifthStar,
	allCount,
	getDate
}