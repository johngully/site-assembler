module.exports = function (grunt) {
  grunt.initConfig({

    // Concurent tasks
    concurrent: {
      default: ['less', 'assemble']
    },

    // Build HTML with Assemble.io
    assemble: {
      options: {
        flatten: true,
        assets: '../build',
        layout: './layouts/layout.hbs',
        partials: './partials/**/*.hbs',
        data: './data/*.json',
      },
      pages: {

        files: {
          '../build/': './templates/**/*.hbs'
        }
      },
    },

    // Build LESS
    less: {
      development: {
        files: {
          '../build/css/styles.css': './less/styles.less'
        }
      }
    },

    // Run tasks when files change
    watch: {
      assemble: {
        files: [
          './data/**/*.json',
          './layouts/**/*.hbs',
          './markdown/**/*.md',
          './partials/**/*.hbs',
          './templates/**/*.hbs'
        ],
        tasks: ['newer:assemble'],
        options: {
          // don't reload since the html files changes are monitored
        }
      },
      less: {
        files: './less/*.less',
        tasks: ['newer:less'],
        options: {
          // don't reload since the css files changes are monitored
        }
      },
      css: {
        files: '../build/css/*.css',
        options: {
          livereload: true
        }
      },
      html: {
        files: '../build/*.html',
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');

  // Speficty the default task
  grunt.registerTask('default', ['concurrent:default']);
};
