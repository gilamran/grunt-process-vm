'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            core: {
                src: ['tasks/*.js']
            }
        },
        exec: {
            renderVmTemplate: {
                cmd: function (fileName, content)
                {
                    return 'java -cp ../vendor/templator.jar com.wix.Templator ' + fileName + ' ' + content;
                }
            }
        }
    });

    grunt.loadTasks('tasks');
};