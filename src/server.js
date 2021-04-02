const http = require('http') 
const express  = require('express') 
const { ApolloServer } = require('apollo-server-express') 
// const context = './src/apollo-context'

// loading modules
const modules = require('./modules') 
const app = express()
const PORT = process.env.PORT || 4000

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
	      const token = req.headers.token || "";

	      return { token }
	    }

	},
	subscriptions: {
		onConnect: (connectionParams, webSocket, context) => {
			if (connectionParams) {
				return {
					token: connectionParams.authToken
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

