/* Implement the type version of Array.unshift */
type Result2 = Unshift<[1, 2], 0>; // [0, 1, 2]

//Solution
type Unshift<T extends readonly unknown[], I> = [I, ...T];
