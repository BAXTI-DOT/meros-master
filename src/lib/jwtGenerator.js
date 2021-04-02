const { sign, verify } = require('jsonwebtoken') 
const { JWT_KEY } = require('../config') 

module.exports = {
	sign : (userId, phone_number) => sign({userId, phone_number}, JWT_KEY.secretKey),
	verify : (token) => verify(token, JWT_KEY.secretKey)
}