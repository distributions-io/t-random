'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, v[, rand] )
*	Creates a matrix of Student's t distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} v - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with Student's t random numbers
*/
function random( dims, dt, v, rand ) {
	var out,
		draw,
		i;

	draw = partial( v, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
