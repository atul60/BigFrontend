/* Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example */
type trimmed1 = Trim<'  Hello World  '> // expected to be 'Hello World'

//Solution
type Space1 = ' ' | '/t' | '/n';
type Trim<T extends string> = T extends `${Space1}${infer R}` | `${infer R}${Space1}` ? Trim<R> : T;

