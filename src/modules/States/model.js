const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_STATES = `
	SELECT
		*
	FROM
		states
`

const BY_ID = `
	SELECT
		*
	FROM
		states
	WHERE
		state_id = $1
`

const CHECK_EXISTING = `
	SELECT
		*
	FROM
		states
	WHERE
		state_name = $1
`

const ADD_STATES = `
	INSERT INTO
		states(state_name)
	VALUES($1)
	RETURNING state_id
`

const UPDATE_STATE = `
	UPDATE 
		states
	SET
		state_name = $1
	WHERE
		state_id = $2
	RETURNING
		state_id
`

const DELETE_STATE = `
	DELETE 
		FROM
	states
	CASCADE
		WHERE
	state_id = $1
	RETURNING
		state_id
`

const states 		= () 					=> fetchAll(ALL_STATES)
const byID 			= (stateID) 			=> fetch(BY_ID, stateID)
const checkExisting = (stateID) 			=> fetchAll(CHECK_EXISTING, stateID)
const addState 		= (stateName) 			=> fetch(ADD_STATES, stateName)
const updateState 	= (stateName, stateID) 	=> fetch(UPDATE_STATE, stateName, stateID)
const deleteState 	= (stateID) 			=> fetch(DELETE_STATE, stateID)

module.exports = {
	states,
	byID,
	checkExisting,
	addState,
	updateState,
	deleteState
}