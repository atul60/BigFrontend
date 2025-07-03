/* Implement the built-in Exclude<T, U>

Exclude from T those types that are assignable to U */

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<T, E> = T extends E ? never : T