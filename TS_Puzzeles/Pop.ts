/* Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element. */
type arr11 = ["a", "b", "c", "d"];
type arr22 = [3, 2, 1];

type re1 = Pop<arr11>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr22>; // expected to be [3, 2]

//Solution
type Pop<T extends any[]> = T extends [...infer S, infer _] ? S : never;
