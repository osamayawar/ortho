module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
            files: grunt.file.expandMapping(['dental/controllers/mainController.js', 
                                            'dental/js/ngRoutes.js'], 'dental/js/', {
            rename: function(destBase, destPath) {
                return destBase+destPath.replace('.js', '.min.js');
            }
        })
    }
        }
    });
   
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};