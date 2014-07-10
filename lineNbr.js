#! usr/bin/env node
// This is meant to be used as a Node.js bistro library; it does not run via npm.
/** use
	require('./lineNbr.js')([ 'On line ', ' snakes:' ])
	console.log(__ln, 'are in the grass')
	// On line 2 snakes:
	// are in the grass
**/
var xS = '', yS = ''
Object.defineProperty(global, '__stack', {
	get: function () {
		var orig, err, stack
		orig = Error.prepareStackTrace
		Error.prepareStackTrace = function(_, stack){ return stack }
		err = new Error
		Error.captureStackTrace(err, arguments.callee)
		stack = err.stack
		Error.prepareStackTrace = orig
		return stack
	}
})
Object.defineProperty(global, '__ln', {
	get: function () {
		return xS + __stack[1].getLineNumber() + xS
	}
})
module.exports = function (xA) { 
	xS = xA[0]
	yS = xA[1]
}
