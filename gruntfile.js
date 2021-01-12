/// <binding BeforeBuild='sass, uglify' />
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css_mobile: {
        src: 'mobile/*.css',
        dest: 'mobile.css'
      },
      css_desktop: {
        src: 'desktop/*.css',
        dest: 'desktop.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.css', '!*.min.css'],
          dest: '',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'cssmin']);
};