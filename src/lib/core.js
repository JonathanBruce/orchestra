/**
 * Tests if the function given in is a function
 * @param  {any}     func Possibly a function
 * @return {boolean}      Boolean flag indicating that the argument passed in is a function
 */
export function isFunction(func) {
	return func
		&& func.constructor
		&& func.apply
		&& func.call;
}