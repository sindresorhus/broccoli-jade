'use strict';
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

JadeFilter.prototype.processString = function (str, filename) {
	this.options.filename = filename;
	var data = this.options.data || {}
	if (!("filename" in data))
		data.filename = filename
	return jade.compile(str, this.options)(data);
};

module.exports = JadeFilter;
