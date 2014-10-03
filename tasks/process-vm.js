'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-exec');

    grunt.config('exec', {
        process: {
            cmd: function(fileName, fileContent) {
                var path = __dirname + "/..";
                return 'java -jar ' + path + '/vendor/vmrenderer.jar "' + fileName + '" "' + fileContent + '"';
            }
        }
    });

    grunt.registerTask('process-vm', 'Processes VM Files.', function(fileName, fileContent) {
        var options = this.options({
            fileName: fileName || "",
            fileContent: fileContent || ""
        });
        grunt.task.run("exec:process:" + options.fileName + ":" + options.fileContent);
    });
    grunt.registerTask('build', ['process-vm']);
};