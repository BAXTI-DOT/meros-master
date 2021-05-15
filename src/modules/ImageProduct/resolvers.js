const model = require('./model')

module.exports = {
	Query: {
		getImage: async(_, { productID }) => {
			const url = await model.image(productID)
			return url
		}
	},
	Mutation: {
		insertImage: async(_, { input: { id, url } }) => {
			console.log(input)
			try {
				const newImage =  await model.newImage(url, id)

				if(newImage) {
					return {
						status: 200,
						message: "Success insert image"
					}
				}
				else {
					throw new Error("Error while adding image")
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		updateImage: async(_, { input: { id, name, path, mimetype, url } }) => {
			try {
				if(url, path, mimetype, name, id) {
					const updatedImage = await model.updateImage(url, path, mimetype, name, id)

					if(updatedImage) {
						return {
							status: 200,
							message: "Success update image"
						}
					}
					else {
						throw new Error("Error while updaing image")
					}
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
	Image: {
		id: global => global.image_id,
		url: global => global.image_link
	}
}