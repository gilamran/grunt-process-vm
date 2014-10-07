'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-exec');

    grunt.config('exec', {
        process: {
            cmd: function(view, payload, output, mode) {
                var path = __dirname + "/..";
                return 'java -jar ' + path + '/vmrenderer/vmrenderer.jar ' + view + ' \'' + decodeURIComponent(payload) + '\' ' + output + ' ' + mode;
            }
        }
    });

    grunt.registerTask('process-vm', 'Processes VM Files.', function(view, payload, output, mode) {
        var options = this.options({
            view: view || "",
            payload: payload || "",
            output: output || "",
            mode: mode || ""
        });
        grunt.task.run("exec:process:" + options.view + ":" + options.payload + ":" + options.output + ":" + options.mode);
    });
};