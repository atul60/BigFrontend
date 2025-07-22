/* Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

For example */

type trimmed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

//Solution
type Space = ' ' | '/n' | '/t';
type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T;