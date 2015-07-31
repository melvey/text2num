/*eslint-env node */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

	// Project settings
	appConfig: {
		src: 'src',
		dist: 'dist'
	},

	// Watches files for changes and runs tasks based on the changed files
	watch: {
		js: {
			files: ['<%= appConfig.src %>/{,*/}*.js'],
			tasks: ['newer:eslint:all', 'karma']
		}
	},


	// Make sure code styles are up to par and there are no obvious mistakes
	eslint: {
		all: {
			src: [
			'Gruntfile.js',
			'<%= appConfig.src %>/{,*/}*.js'
			]
		}
	},


	// Empties folders to start fresh
	clean: {
		dist: {
		files: [{
			dot: true,
			src: [
			'.tmp',
			'<%= appConfig.dist %>/{,*/}*',
			'<%= appConfig.dist %>/.git{,*/}*'
			]
		}]
		}
	},


	uglify: {
		dist: {
			files: {
				'<%= appConfig.dist %>/text2num.min.js': ['<%= appConfig.src %>/text2num.js']
			}
		}
	},



	// Copies remaining files to places other tasks can use
	copy: {
		dist: {
			files: [{
				dest: '<%= appConfig.dist %>/text2num.js',
				src: ['<%= appConfig.src %>/text2num.js']
			}]
		}
	},

	// Test settings
	jest: {
		options: {
			coverage: true,
			testPathPattern: /.*-test.js/
		}
	}
	});


	grunt.registerTask('test', [
		'eslint',
		'jest'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'copy:dist',
		'uglify'
	]);

	grunt.registerTask('default', [
	'newer:eslint',
	'test',
	'build'
	]);
};
