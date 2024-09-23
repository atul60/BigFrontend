type LastChar<T extends string> = T extends `${infer Rest}${infer Last}` ? Last : never;
  // your code here