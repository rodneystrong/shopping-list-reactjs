var path = require('path');

module.exports = {
	options: {
		port: 9000,
		hostname: 'localhost'
	},
	dev: {
		options: {
			bases: path.resolve('./app'),
			server: path.resolve('./index'),
			livereload: true
		}
	}
};
