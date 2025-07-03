/* Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. 
The output should be a boolean true or false.*/
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

//Solution

type Includes<T extends readonly unknown[], I> = I extends T[number]
  ? true
  : false;
