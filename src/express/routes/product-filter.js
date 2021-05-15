const model = require('./model')

module.exports = {
	SUBCATEGORY_PRODUCTS: async(req, res) => {
		try {
			const { data: filterID } = req.body

			let arr = []

			const idToFilter = [ ... filterID ]

			for (let i of idToFilter) {
				const filtered = await model.filtered(i)

				for ( let data of filtered) {
					arr.push(data)
				}
			}

			let uniqueList = []
			let dupList = []

			Array.prototype.contains = function(item){
			  let filtered_item = this.filter((i) => {
			    return i.product_id === item.product_id
			  })
			  return !!filtered_item.length
			}

			function contains(list, item){
			  let filtered_item = list.filter((i) => {
			    return i.product_id === item.product_id
			  })
			  return !!filtered_item.length
			}

			function pushToUniqueList(item){
			  if(!uniqueList.contains(item)) uniqueList.push(item)
			}

			function pushToDuplicateList(item){
			  if(!dupList.contains(item)) dupList.push(item)
			}

			for(let i = 0; i < arr.length; i++ ){
			  if(uniqueList.contains(arr[i])){
			    pushToDuplicateList(arr[i])
			  } else {
			    pushToUniqueList(arr[i])
			  }
			}

			if(dupList.length === 0) {
				res.send({
					data: uniqueList
				})
			} else {
				res.send({
					data: dupList
				})
			}

		}	
		catch(err) {
			res.status(500).send(err)
		}
	},
	SUBCLASS_PRODUCTS: async(req, res) => {
		try {
			const { data: filterID, subclassID } = req.body

			let arr = []

			const idToFilter = [ ... filterID ]

			for (let i of idToFilter) {
				const filtered = await model.filteredSubclass(i, subclassID)


				for ( let data of filtered) {
					arr.push(data)
				}
			}

			let uniqueList = []
			let dupList = []

			Array.prototype.contains = function(item){
			  let filtered_item = this.filter((i) => {
			    return i.product_id === item.product_id
			  })
			  return !!filtered_item.length
			}

			function contains(list, item){
			  let filtered_item = list.filter((i) => {
			    return i.product_id === item.product_id
			  })
			  return !!filtered_item.length
			}

			function pushToUniqueList(item){
			  if(!uniqueList.contains(item)) uniqueList.push(item)
			}

			function pushToDuplicateList(item){
			  if(!dupList.contains(item)) dupList.push(item)
			}

			for(let i = 0; i < arr.length; i++ ){
			  if(uniqueList.contains(arr[i])){
			    pushToDuplicateList(arr[i])
			  } else {
			    pushToUniqueList(arr[i])
			  }
			}

			if(dupList.length === 0) {
				res.send({
					data: uniqueList
				})
			} else {
				res.send({
					data: dupList
				})
			}
		}
		catch(err) {
			res.status(500).send(err)
		}
	}
}