'use strict';
var fs = require('fs');
var Promise = require('rsvp').Promise;
var Filter = require('broccoli-filter');
var jade = require('jade');

function JadeFilter(inputTree, options) {
	if (!(this instanceof JadeFilter)) {
		return new JadeFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

JadeFilter.prototype = Object.create(Filter.prototype);
JadeFilter.prototype.constructor = JadeFilter;

JadeFilter.prototype.extensions = ['jade'];
JadeFilter.prototype.targetExtension = 'html';

JadeFilter.prototype.processFile = function (srcDir, destDir, relativePath) {
	var self = this
	var inputEncoding = (this.inputEncoding === undefined) ? 'utf8' : this.inputEncoding
	var outputEncoding = (this.outputEncoding === undefined) ? 'utf8' : this.outputEncoding
	var string = fs.readFileSync(srcDir + '/' + relativePath, { encoding: inputEncoding })
	return Promise.resolve(self.processString(string, relativePath, srcDir))
		.then(function (outputString) {
			var outputPath = self.getDestFilePath(relativePath)
			fs.writeFileSync(destDir + '/' + outputPath, outputString, { encoding: outputEncoding })
		});
}

JadeFilter.prototype.processString = function (str, relativePath, srcDir) {
	this.options.filename = this.options.filename || (this.options.resolvePath || srcDir) + "/" + relativePath;
	return jade.compile(str, this.options)(this.options.data);
};

module.exports = JadeFilter;
