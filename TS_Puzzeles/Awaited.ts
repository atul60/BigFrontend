/* If we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?

For example: if we have Promise<ExampleType> how to get ExampleType? */

type ExampleType = Promise<string>

type MyAwaited<T extends Promise<K extends any>> = K;

type Result = MyAwaited<ExampleType> // string