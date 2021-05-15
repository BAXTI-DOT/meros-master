const model = require('./model') 
const { verify } = require('../../lib/jwtGenerator')
const pubsub = require('../../pubsub') 
const COMMENT = 'COMMENT'

module.exports = {
	Query: {
		comments: async() => {
			const allComments = await model.comments()
			return allComments
		},
		byProductID: async(_, { productID, page, limit }) => {
			const comments = await model.byProductID(productID, page, limit)
			return comments
		},
		countComments: 		 (_, { limit, productID })   => model.count(limit, productID),
		firstCount: 	async(_, { productID }) => await model.firstStar(productID), 
		secondCount: 	async(_, { productID }) => await model.secondStar(productID), 
		thirdCount: 	async(_, { productID }) => await model.thirdStar(productID), 
		fourthCount: 	async(_, { productID }) => await model.fourthStar(productID), 
		fifthCount: 	async(_, { productID }) => await model.fifthStar(productID), 
		allCount: 		async(_, { productID }) => await model.allCount(productID),
		getDate: 		async(_, { commentID }) => await model.getDate(commentID),
	},
	Mutation: {
		createComment: async(_, { body, rate, productID }, { token }) => {
			try {
				const { userId } = verify(token)

				if(body && rate && productID && userId) {

					const newComment = await model.createComment(body, rate, productID, userId)

					if(newComment) {
						pubsub.publish(COMMENT)
						return {
							status: 200,
							message: "Comment has succesfully been created!!!"
						}
					} else {
						throw "There was an error creating comment"
					}
				} else {
					throw "Error while targeting args"
				} 
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		}
	},
	Subscription: {
		byProductID: {
			resolve: async(_, { productID, page, limit }) => {
				try {
					const comments = await model.byProductID(productID, page, limit)
					return comments
				} catch(error) {
					throw error
				}
			},
			subscribe: () => pubsub.asyncIterator([COMMENT])
		}
	},
	Comments: {
		id: 		global => global.comment_id,
		body: 		global => global.comment_body,
		rate: 		global => global.comment_rate,
		productID: 	global => global.product_id
	},
	UserCommments: {
		id: 			global => global.comment_id,
		userName: 		global => global.user_name,
		rate: 			global => global.comment_rate,
		body: 			global => global.comment_body,
		createdTime: 	global => global.created_at
	},
	StarRate: {
		count: global => global.count
	}
}