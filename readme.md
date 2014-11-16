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

You can pass in `options.data` that will be used as locals for your HTML compilation.

For `extends` and `blocks`, you may specify `options.resolvePath` which will be the directory used for relative Jade paths. Otherwise it is up to Broccoli internals.

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
