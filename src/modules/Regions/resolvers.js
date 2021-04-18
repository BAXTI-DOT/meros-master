const model = require('./model')

module.exports = {
	Query: {
		allRegions: async() => {
			try {
				const regions = await model.regions()
				return regions
			}
			catch(error) {
				throw error
			}
		},
		byRegionID: async(_, { regionID }) => {
			try {
				const region = await model.byID(regionID)
				return region
			}
			catch(error) {
				throw error
			}
		},
		byStateID: async(_, { stateID }) => {
			try {
				const regions = await model.byStateID(stateID)
				return regions
			}
			catch(error) {
				throw error
			}
 		}
	},
	Mutation: {
		addRegion: async(_, { regionName, stateID }) => {
			try {
				const newRegion = await model.addRegion(regionName, stateID)

				if(newRegion) {
					return {
						status: "200",
						message: "New region added"
					}
				}
				else {
					throw "New region has not been added"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		updateRegion: async(_, { regionID, regionName }) => {
			try {	
				const updatedRegion = await model.updateRegion(regionName, regionID)

				if(updatedRegion) {
					return {
						status: "200",
						message: "Updated region"
					}
				}
				else {
					throw "Region has not been updated"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		deleteRegion: async(_, { regionID }) => {
			try {
				const deletedRegion = await model.deleteRegion(regionID)

				if(deletedRegion) {
					return {
						status: "200",
						message: "Deleted"
					}
				}
				else {
					throw "Has been deleted!!"
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
	Regions: {
		id: 	global => global.region_id,
		name: 	global => global.region_name
	}
}