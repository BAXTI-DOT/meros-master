const { fetch, fetchAll } = require('../../lib/postgres') 

const ALL_REGIONS = `
	SELECT
		region_id,
		region_name
	FROM
		regions
`

const BY_REGION_ID = `
	SELECT
		region_id,
		region_name
	FROM
		regions
	WHERE
		region_id = $1
`

const BY_STATE_ID = `
	SELECT
		region_id,
		region_name
	FROM
		regions
	WHERE
		state_id = $1
`

const ADD_REGION = `
	INSERT INTO
		regions(region_name, state_id)
	VALUES($1, $2)
	RETURNING
		region_id
`

const UPDATE_REGION = `
	UPDATE 
		regions
	SET
		region_name = $1
	WHERE
		region_id = $2
	RETURNING
		region_id
`

const DELETE_REGION = `
	DELETE FROM
		regions
	WHERE
		region_id = $1
	RETURNING
		region_id
`

const regions 		= () 						=> fetchAll(ALL_REGIONS)
const byStateID 	= (stateID) 				=> fetchAll(BY_STATE_ID, stateID)
const byID 			= (regionID) 				=> fetch(BY_REGION_ID, regionID)
const addRegion 	= (regionName, stateID) 	=> fetch(ADD_REGION, regionName, stateID)
const updateRegion 	= (regionName, regionID) 	=> fetch(UPDATE_REGION, regionName, regionID)
const deleteRegion 	= (regionID) 				=> fetch(DELETE_REGION, regionID)

module.exports = {
	regions,
	byStateID,
	byID,
	addRegion,
	updateRegion,
	deleteRegion
}