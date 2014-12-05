module.exports = {
	options: {
		liverelod: true
	},
	index: {
		files: ['app/index.html']
	},
	css: {
		files: ['app/**/*.css']
	},
	sass: {
		files: ['app/**/*.scss'],
		tasks: ['compass'],
		options: {
			liverelod: false
		}
	},
	scripts: {
		files: ['app/**/*.js']
	}
};
