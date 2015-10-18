'use strict';

// MODULES //

var randNorm = require( 'distributions-normal-random/lib/number.js' ),
	randChisq = require( 'distributions-chisquare-random/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// PARTIAL //

/**
* FUNCTION: partial( v[, rand] )
*	Partially applies `v` and returns a function to generate random variables from the Student t distribution.
*
* @param {Number} v - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( v, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}

	/**
	* FUNCTION: draw()
	*	Generates a random draw for a Student t distribution with parameter `v`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var num = randNorm( 0, 1, random );
		return num / sqrt( randChisq( v, random ) / v );
	}; // end FUNCTION draw()

} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
