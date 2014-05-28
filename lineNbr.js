#! usr/bin/env node
// Example:
// require('./lineNbr.js')([ 'On line ', ':' ])
// console.log(__l, 'snakes are in the grass')
var pre = ''
, post = ''
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
Object.defineProperty(global, '__l', {
	get: function () {
		return pre + __stack[1].getLineNumber() + post
	}
})
module.exports = function (d) { 
	pre = d[0]
	post = d[1]
}
