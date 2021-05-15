const PG = {
	connection: 'postgres://postgres:baxtiyor@localhost:5432/meros',
	connectionEL: 'postgres://swikpnpo:xnNsTRcSZE6xE4LtEw1w8K4jqWIRhp1r@queenie.db.elephantsql.com:5432/swikpnpo',
	host: 5432,
	user: 'postgres',
	password: 'baxtiyor',
	database: 'merosbaza'
}

const JWT_KEY = {
	secretKey: 'MEROS_PAROL_FOR_JWT'
}


module.exports = {
	PG,
	JWT_KEY
}
