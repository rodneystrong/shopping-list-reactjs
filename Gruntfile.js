module.exports = function(grunt){
   require('load-grunt-config')(grunt);

   grunt.registerTask('server', ['express:dev', 'watch']);
   grunt.registerTask('default', ['compass', 'server']);
};
