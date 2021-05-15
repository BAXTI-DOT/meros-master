const express = require('express')
const path = require('path')
const fs = require('fs')
const uploadModel = require('./model')
const { v4: uuidv4 } = require('uuid')

module.exports = {
	POST_ON_CHANGE: async(req, res) => {
		try {
			let { file: { mimetype } } = req.files
			let { file } = req.files
			let id = uuidv4()
	        let name = `${id}`

			mimetype === 'image/jpeg' ? name = `${id}.jpg` : null
			mimetype === 'image/png' ? name = `${id}.png` : null
			mimetype === 'image/svg+xml' ? name = `${id}.svg` : null

	        const uploadPath = __dirname + '../../../productImages/' + name
	        const path = '/productImages/' + name

	        file.mv(uploadPath, (error) => {
			    if (error) {
			      console.error(error)
			      res.writeHead(500, {
			        'Content-Type': 'application/json'
			      })
			      res.end(JSON.stringify({ status: 'error', message: error }))
			      return
			    }
	        	
	        	let url = `http://localhost:4000/${name}`

			    res.json({
					mimetype,
					name,
					url,
					path
				})
			 })
		}
		catch(err) {
      		return res.send(err.message);
		}
	},
	POST_ON_SUBMIT: async(req, res) => {
		try {
			const { imgData: { mimetype, name, url, path }, productID} = req.body

			const insertedPhoto = await uploadModel.insertfile(url, path, mimetype, productID, name)

			if(insertedPhoto) res.status(201).send("Success insert")
		}
		catch(err) {
      		return res.send(err.message);
		}
	},
	UPDATE_IMAGE: async(req, res) => {
		try {
			const { data: { mimetype, name, url, path }, imageID } = req.body

			const updateImage = await uploadModel.updateImage(url, path, mimetype, name, imageID)

			updateImage ? res.status(200).send("Success") : res.status(400).send("Error update image")

		}
		catch(err) {
			return res.send(err.message)
		}
	}
}