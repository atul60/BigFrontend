/* Implement the generic version of Array.push */
type Result1 = Push<[1, 2], "3">; // [1, 2, '3']

//Solution
type Push<T extends readonly unknown[], I> = [...T, I];
