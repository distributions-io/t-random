'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, v[, rand] )
*	Creates a multidimensional array of Student's t distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} v - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with Student's t random numbers
*/
function random( dims, v, rand ) {
	var draw = partial( v, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
