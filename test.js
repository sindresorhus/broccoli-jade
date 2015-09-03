'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

after(function () {
	rimraf.sync('temp');
});

it('should compile Jade', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.html', 'utf8'),
		fs.readFileSync('fixture/expected.html', 'utf8').trim()
	);
});

it('should compile Jade extends', function () {
	assert.equal(
		fs.readFileSync('temp/extends.html', 'utf8'),
		fs.readFileSync('fixture/extends.html', 'utf8').trim()
	);
});
