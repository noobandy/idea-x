'use strict'

const path = require('path') 

exports.register = function (server, options, next) {
	next();
}

exports.register.attributes = require(path.join(__dirname, './package.json'))