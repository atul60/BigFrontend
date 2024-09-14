/* 
For a function type T, ThisParameterType<T> extracts the this type. If this is not set, unknown is used.

Please implement MyThisParameterType<T> by yourself.

function Foo(this: {a: string}) {}
function Bar() {}
type A = MyThisParameterType<typeof Foo> // {a: string}
type B = MyThisParameterType<typeof Bar> // unknown

*/


// your code here, please don't use ThisParameterType<T> in your code
type MyThisParameterType<T extends (...args: any[]) => any > = T extends (this: infer K) => any ? K : never;