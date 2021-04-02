const context = ({ req, connection }) => {
	if (connection) {
      // check connection for metadata
      	return connection.context;
    } 
    else {
      // check from req
      const token = req.headers.token || "";

      return { token };
    }
}

module.exports = {
	context
}

