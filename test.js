'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should compile Jade', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.html', 'utf8'),
		fs.readFileSync('fixture/expected.html', 'utf8').trim()
	);

  assert.equal(
    fs.readFileSync('temp/fixture2.html', 'utf8'),
    fs.readFileSync('fixture/expected2.html', 'utf8').trim()
  );
});
