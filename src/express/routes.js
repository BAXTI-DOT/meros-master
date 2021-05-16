const express = require('express')

const router = express.Router()

const Upload = require('./routes/upload')
const Filter = require('./routes/filter')
const ProductFilter = require('./routes/product-filter')
const CART = require('./routes/cart/cart')
const ORDER = require('./routes/order/order')
const PRODUCT = require('./routes/product/product')

router
	.post('/uploadFile', Upload.POST_ON_CHANGE)
	.post('/uploadSubmit', Upload.POST_ON_SUBMIT)
	.post('/updateImage', Upload.UPDATE_IMAGE)
	.post('/filter', Filter.POST_FILTER)
	.post('/updateFilter', Filter.UPDATE_FILTERED)
	.post('/filterproduct', ProductFilter.SUBCATEGORY_PRODUCTS)
	.post('/filterSubclassProduct', ProductFilter.SUBCLASS_PRODUCTS)
	.post('/add-cart', CART.ADD_TO_CART)
	.get('/cart', CART.GET_CART)
	.post('/updatePlus', CART.UPDATE_PLUS)
	.post('/updateMinus', CART.UPDATE_MINUS)
	.post('/deleteCart', CART.DELETE_CART)
	.post('/new-order', ORDER.POST)
	.post('/new-product', PRODUCT.CREATE_PRODUCT)

module.exports = router
