# [broccoli](https://github.com/joliss/broccoli)-jade [![Build Status](https://travis-ci.org/sindresorhus/broccoli-jade.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-jade)

> Compile [Jade](https://github.com/visionmedia/jade) templates

*Issues with the output should be reported on the Jade [issue tracker](https://github.com/visionmedia/jade/issues).*


## Install

```sh
$ npm install --save broccoli-jade
```


## Usage

```js
var jade = require('broccoli-jade');
tree = jade(tree, options);
```


## API

### jade(tree, options)

#### options

See the Jade [options](http://jade-lang.com/api/).

In addition you can pass in `options.data` that will be used as locals for your HTML compilation.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
