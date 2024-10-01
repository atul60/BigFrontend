/* what is Composition? It is actually not that difficult to understand, see @dan_abramov 's explanation.

Here you are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
Your pipe() would be used to generate new functions

pipe([
  times(2),
  times(3)
])  
// x * 2 * 3
pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4
pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4
notes

to make things simple, functions passed to pipe() will all accept 1 argument */

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return function(arg) {
		let result = arg;
	funcs.forEach((fun) => {
		result = fun(result);
	})
	return result;
	}
}

