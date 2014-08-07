'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('process-vm-template', '', function (fileName, fileContent) {
        grunt.task.run('exec:renderVmTemplate:' + fileName + ':' + fileContent);
    });
};