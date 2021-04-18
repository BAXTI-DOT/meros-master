const model = require('./model')

module.exports = {
	Query: {
		allStates: async() => {
			try {
				const states = await model.states()
				return states
			}
			catch(error) {
				throw error
			}
		},
		stateById: async(_, { stateID }) => {
			try {
				const state = await model.byID(stateID)
				return state
			}
			catch(error) {
				throw error
			}
		}
	},
	Mutation: {
		addState: async(_, { stateName }) => {
			try {
				const check = await model.checkExisting(stateName)
				
				if(check.length !== 0) {
					throw "State already exists"
				}

				const newState = await model.addState(stateName)

				if(newState) {
					return {
						status: "200",
						message: "State has succesfully been added"
					}
				}
				else {
					throw "There is error"
				}
			}
			catch(error) {
				return {
					status: "200",
					messsage: new Error(error).message || error
				}
			}
		},
		deleteState: async(_, { stateID }) => {
			try {
				const deletedState = await model.deleteState(stateID)

				if(deletedState) {
					return {
						status: "200",
						message: "State has succesfully been deleted"
					}
				}
				else {
					throw "There is error"
				}
			}
			catch(error) {
				return {
					status: "ERROR",
					message: new Error(error).message || error
				}
			}
		},
		updateState: async(_, { stateName, stateID }) => {
			try {
				const updatedState = await model.updateState(stateName, stateID)

				if(updatedState) {
					return {
						status: "200",
						message: "State has successfully been updated"
					}
				}
				else {
					throw "There is error"
				}
			}
			catch(error) {
				return {
					status: "Error",
					message: new Error(error).message || error
				}
			}
 		}
	},
	States: {
		id: 	global => global.state_id,
		name: 	global => global.state_name
	}
}