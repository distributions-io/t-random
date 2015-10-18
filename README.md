Student t Random Variables
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a [matrix](https://github.com/dstructs/matrix) or array filled with draws from a [t distribution](https://en.wikipedia.org/wiki/t_distribution).


## Installation

``` bash
$ npm install distributions-t-random
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var random = require( 'distributions-t-random' );
```

#### random( [dims][, opts] )

Creates a [`matrix`](https://github.com/dstructs/matrix) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) filled with draws from a [t distribution](https://en.wikipedia.org/wiki/t_distribution). The `dims` argument may either be a positive `integer` specifying a `length` or an `array` of positive `integers` specifying dimensions. If no `dims` argument is supplied,the function returns a single random draw from a [t distribution](https://en.wikipedia.org/wiki/t_distribution).

``` javascript
var out;

// Set seed
random.seed = 2;

out = random( 5 );
// returns [ ~-0.712, ~-3.764, ~3.003, ~-1.422, ~-0.324 ]

out = random( [2,1,2] );
// returns [ [ [~0.31,~-0.186] ], [ [~0.465,~-1.0414] ] ]

```

The function accepts the following `options`:

*	__v__: degrees of freedom. Default: `1`.
*	__seed__: positive integer used as a seed to initialize the generator. If not supplied, uniformly distributed random numbers are generated via an underlying generator seedable by setting the `seed` property of the exported function.
*	__dtype__: output data type (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types). Default: `generic`.

The [t](https://en.wikipedia.org/wiki/t_distribution) distribution is a function of one parameter: `v > 0`(degrees of freedom). By default, `v` is equal to `1`. To adjust it, set the corresponding option.

``` javascript
var out = random( 5, {
	'v': 12
});
// returns [ ~0.052, ~-0.034, ~0.96, ~0.556, ~0.575 ]

```

To be able to reproduce the generated random numbers, set the `seed` option to a positive integer.

``` javascript
var out = random( 3, {
	'seed': 22
});
// returns [ ~-0.475, ~-8.965, ~-50.697 ]

var out = random( 3, {
	'seed': 22
});
// returns [ ~-0.475, ~-8.965, ~-50.697 ]

```

If no `seed` option is supplied, each function call uses a common underlying uniform number generator. A positive-integer seed for this underlying generator can be supplied by setting the seed property of the exported function.

```javascript
random.seed = 11;
var out = random();
// returns ~-1.055

var out = random();
// returns ~-17.864

random.seed = 11;
var out = random();
// returns ~-1.055

var out = random();
// returns ~-17.864

```

By default, the output data structure is a generic [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). To output a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), set the `dtype` option.

``` javascript
var out;

out = random( 5, {
	'dtype': 'int32'
});
// returns Int32Array( [0,0,-3,0,1] )

out = random( [3,2], {
	'dtype': 'int32'
});
/*
	[ 0 0
	  0 0
	  0 0 ]
*/

```

__Notes__:
*	Currently, for more than `2` dimensions, the function outputs a __generic__ `array` and ignores any specified `dtype`.

	``` javascript
	var out = random( [2,1,3], {
		'dtype': 'float32'
	});
	// returns [ [ [~-0.576,~2.441,~22.769] ], [ [~1.505,~-4.983,~6.277] ] ]

	```

## Examples

``` javascript
var random = require( 'distributions-t-random' ),
	out;

// Set seed
random.seed = 18;

// Plain arrays...

// 1x10:
out = random( 10 );

// 2x1x3:
out = random( [2,1,3] );

// 5x5x5:
out = random( [5,5,5] );

// 10x5x10x20:
out = random( [10,5,10,20] );

// Typed arrays...
out = random( 10, {
	'dtype': 'float32'
});

// Matrices...
out = random( [3,2], {
	'dtype': 'float64'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-t-random.svg
[npm-url]: https://npmjs.org/package/distributions-t-random

[travis-image]: http://img.shields.io/travis/distributions-io/t-random/master.svg
[travis-url]: https://travis-ci.org/distributions-io/t-random

[codecov-image]: https://img.shields.io/codecov/c/github/distributions-io/t-random/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/t-random?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/t-random.svg
[dependencies-url]: https://david-dm.org/distributions-io/t-random

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/t-random.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/t-random

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/t-random.svg
[github-issues-url]: https://github.com/distributions-io/t-random/issues
