'use strict';
var Filter = require('broccoli-filter');
var jade = require('jade');
var path = require('path');
var objectAssign = require('object-assign');


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

JadeFilter.prototype.processString = function (str, relativePath, srcDir) {

	// Pass along the filename option so that include/extend can work
	var tempOptions = objectAssign(this.options, {
		filename: path.join(srcDir, relativePath)
	});

	return jade.compile(str, tempOptions)(this.options.data);
};

module.exports = JadeFilter;
