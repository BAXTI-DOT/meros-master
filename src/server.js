const http = require('http') 
const express  = require('express') 
const { ApolloServer } = require('apollo-server-express') 
const path = require('path')
const fileUpload = require('express-fileupload')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser') 

// loading modules
const modules = require('./modules')
const PORT = process.env.PORT || 4000
const routes = require('./express/routes')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname, '/productImages')))


const findUser = (authToken) => {
    return (tokenValidationResult) => {
        // ... finds user by auth token and return a Promise, rejects in case of an error
    }
}

// creating Apollo Server
const server = new ApolloServer({ 
	modules,
	context: ({ req, connection }) => {
		if (connection) {
	      // check connection for metadata
	      	return connection.context;
	    } 
	    else {
	      // check from req
	      const token = req.headers.authorization || "";

	      return { token }
	    }

	},
	subscriptions: {
		onConnect: (connectionParams, webSocket, context) => {
			if (connectionParams) {
				return {
					token: connectionParams.token
				}
			}
		},
		onDisconnect: (webSocket, context) => {},
	},
	introspection: true,
  	playground: true
})

server.applyMiddleware({ app })

// creating http server
const httpServer = http.createServer( app )
server.installSubscriptionHandlers(httpServer)

// server running
httpServer.listen({ port: PORT }, () => {
	console.log('http://localhost:' + PORT + server.graphqlPath)
	console.log('ws://localhost:' + PORT + server.subscriptionsPath)
})

