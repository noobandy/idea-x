'use strict'

const Glue = require('glue')
const manifest = {
	connections: [
	{
		port: 3000,
		labels: ['api']
	}
	],
	registrations: [
	{
		plugin: {
			register: 'good',
			options: {
				ops: {
					interval: 1000
				},
				reporters: {
					rotatingFileReporter: [{
						module: 'good-squeeze',
						name: 'Squeeze',
						args: [{ ops: '*' }]
					}, {
						module: 'good-squeeze',
						name: 'SafeJson'
					}, {
						module: 'good-file',
						args: ['server.log']
					}]
				}
			}
		}
	},
	{
		plugin: {
			register: './lib/modules/complainant',
			options: {}
		}
	},
	{
		plugin: {
			register: './lib/modules/complaint',
			options: {}
		}
	},
	{
		plugin: {
			register: './lib/modules/organization',
			options: {}
		}
	}                
    ]
}

const options = {
	relativeTo: __dirname
}

Glue.compose(manifest, options, (err, server) => {
	if(err) {
		throw err
	}

	server.start(() => {
		console.log('server started')
	})

})