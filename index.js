'use strict';
var fs = require('fs');
var Filter = require('broccoli-filter');
var jade = require('jade');

function JadeFilter(inputTree, options) {
	if (!(this instanceof JadeFilter)) {
		return new JadeFilter(inputTree, options);
	}

  Filter.call(this, inputTree);
	this.options = options || {};
}

JadeFilter.prototype = Object.create(Filter.prototype);
JadeFilter.prototype.constructor = JadeFilter;

JadeFilter.prototype.extensions = ['jade'];
JadeFilter.prototype.targetExtension = 'html';

JadeFilter.prototype.processFile = function (srcDir, destDir, relativePath) {
	var string = fs.readFileSync(srcDir + '/' + relativePath, {encoding: this.inputEncoding || 'utf8'}),
		outputString = this.processString(string, relativePath, srcDir),
		outputPath = this.getDestFilePath(relativePath);
	fs.writeFileSync(destDir + '/' + outputPath, outputString, {encoding: this.outputEncoding || 'utf8'});
}

JadeFilter.prototype.processString = function (str, relativePath, srcDir) {
	this.options.filename = this.options.filename || (this.options.resolvePath || srcDir) + '/' + relativePath;
	return jade.compile(str, this.options)(this.options.data);
};

module.exports = JadeFilter;
