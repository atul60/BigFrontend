/* Implement the built-in Parameters generic without using it. */
const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

// Solution
type MyParameters<T extends Function> = T extends (...args: infer k) => string
  ? k
  : never;
