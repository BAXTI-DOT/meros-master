const PG = {
	connection: 'postgres://postgres:baxtiyor@localhost:5432/meros',
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
