'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-exec');
    grunt.initConfig({
        exec: {
            process: {
                cmd: function(fileName, fileContent) {
                    var path = __dirname + "/..";
                    return 'java -cp ' + path + '/vendor/templator.jar com.wix.Templator "' + fileName + '" "' + fileContent + '"';
                }
            }
        }
    });
    grunt.registerTask('process-vm', 'Processes VM Files.', function() {
        var options = this.options({
            fileName: "",
            fileContent: ""
        });
        grunt.task.run("exec:process:" + options.fileName + ":b" + options.fileContent);
    });
    grunt.registerTask('build', ['process-vm']);
};