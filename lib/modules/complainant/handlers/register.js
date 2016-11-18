'use strict'

const co = require('co')

module.exports = co.wrap(function* (request, reply) {
	reply()
})

