'use strict';
var Filter = require('broccoli-filter');
var jade = require('jade');
var path = require('path');

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

JadeFilter.prototype.cloneOptions = function(keysToOmit) {
	var optionsClone = {};

	if (keysToOmit === null || keysToOmit === undefined) {
		keysToOmit = ['data'];
	}

	for (var key in this.options) {
		if (this.options.hasOwnProperty(key) && keysToOmit.indexOf(key) == -1) {
			optionsClone[key] = this.options[key];
		}
	}

	return optionsClone;
};

JadeFilter.prototype.processString = function (str, relativePath, srcDir) {
	var optionsClone = this.cloneOptions();

	// Pass along the filename option so that include/extend can work
	optionsClone.filename = path.join(srcDir, relativePath);

	return jade.compile(str, optionsClone)(this.options.data);
};

module.exports = JadeFilter;
