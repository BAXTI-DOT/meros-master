const model = require('./model')
const categoryModel = require('../Category/model')
const subcategoryModel = require('../Subcategory/model')
const subclassModel = require('../Subclass/model')

module.exports = {
	Query: {
		products: async(_, { categoryID, subcategoryID, subclassID, page, limit }) => {
			try {
				if(categoryID && subcategoryID && subclassID && page && limit) {
					const subclass = await model.subclass(subclassID)
					return subclass
				}
				else if(categoryID && subcategoryID && page && limit) {
					const subcategory = await model.subcategory(subcategoryID, page, limit)
					return subcategory
				}
				else if(categoryID && page && limit) {
					const category = await model.category(categoryID, page, limit)
					return category
				}
				else {
					const all = await model.many(page, limit)
					return all
				}
			}
			catch(error) {
				throw error
			}
		},
		countOfProducts: async(_, { limit, categoryID, subcategoryID, subclassID }) => {
			try {
				if(categoryID && subcategoryID && subclassID && limit) {
					const subclass = await model.subclassCount(limit, subclassID)
					return subclass
				}
				else if(categoryID && subcategoryID && limit) {
					const subcategory = await model.subcategoryCount(limit, subcategoryID)
					return subcategory
				}
				else if(categoryID && limit) {
					const category = await model.categoryCount(limit, categoryID)
					return category
				}
				else {
					const all = await model.count(limit)
					return all
				}
			}
			catch(error) {
				throw error
			}
		},
		editProducts: async(_, { productID }) => {
			try {
				const editProducts = await model.editProduct(productID)
				return editProducts
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		createProduct: async(_, { productID, name, price, categoryID, subcategoryID, subclassID, isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition }) => {
			try {
				console.log(productID, name, price, categoryID, subcategoryID, subclassID, isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition)
				const newProduct = await model.createProduct(productID, name, price, categoryID, subcategoryID, subclassID, isSale,isGift, isRecommended, isNew, isBest, sale, amount, definition)

				if(newProduct) {
					return {
						status: "200",
						message: "Product has successfully been created",
						productID: newProduct.product_id
					}
				}
				else {
					throw "Error creating product"
				}
			}
			catch(error) {
				return {
					status: "error",
					message: new Error(error).message || error
				}
			}
		},
		updateProduct: async(_, { productID, name, price, categoryID, subcategoryID, subclassID, isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition }) => {
			try {
				const updatedProduct = await model.updateProduct(productID, name, price, categoryID, subcategoryID, subclassID, isSale, isGift, isRecommended, isNew, isBest, sale, amount, definition)

				console.log(updatedProduct)

				if(updatedProduct) {
					return {
						status: 200,
						message: "Product updated successfully"
					}
				}
				else {
					throw "Error while updating product"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteProduct: async(_, { productID }) => {
			try {
				const deletedProduct = await model.deleteProduct(productID)

				if(deletedProduct) {
					return {
						status: 200,
						message: "Success been deleted"
					}
				}
				else {
					throw new Error("Error while deleting")
				}
			}
			catch(error) {
				return {
					status: "error",
					message: new Error(error).message || error
				}
			}
		}
	},
	AdminProduct: {
		id: 	global => global.product_id,
		name: 	global => global.product_name
	},
	EditingProduct: {
		id: global => global.product_id,
		name: global => global.product_name,
		price: global => global.product_price,
		sale: global => global.sale_amount,
		amount: global => global.product_amount,
		definition: global => global.product_definition,
		isNew: global => global.is_new,
		isSale: global => global.is_sale,
		isGift: global => global.is_gift,
		isBest: global => global.is_best,
		isRecommended: global => global.is_recommended,
		category: async global => await categoryModel.byID(global.product_id),
		subcategory: async global => await subcategoryModel.byproductID(global.product_id),
		subclass: async global => await subclassModel.byproductID(global.product_id)
	}
}

