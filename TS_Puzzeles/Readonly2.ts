/* Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>. */

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T> = {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
};
const todo1: MyReadonly2<Todo1, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo1.title = "Hello"; // Error: cannot reassign a readonly property
// todo1.description = "barFoo"; // Error: cannot reassign a readonly property
todo1.completed = true; // OK
