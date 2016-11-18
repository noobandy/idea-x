'use strict'

const path = require('path') 

exports.register = function (server, options, next) {
	server.route({
		method: 'POST',
		path: '/register',
		handler: require('./handlers/register')
	})
	
	next();
}

exports.register.attributes = require(path.join(__dirname, './package.json'))