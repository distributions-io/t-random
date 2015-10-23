'use strict';

// MODULES //

var randNorm = require( 'distributions-normal-random/lib/number.js' ),
	randChisq = require( 'distributions-chisquare-random/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// GENERATE STUDENT T RANDOM NUMBERS //

/**
* FUNCTION random( v[, rand] )
*	Generates a random draw from a Student t distribution with parameter `v`.
*
* @param {Number} v - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( v, randp ) {
	var rand,
		num;

	rand = randp ? randp : Math.random;
	num = randNorm( 0, 1, rand );
	return num / sqrt( randChisq( v, rand ) / v );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
