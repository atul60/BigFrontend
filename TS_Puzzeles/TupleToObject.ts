/* Given an array, transform it into an object type and the key/value must be in the provided array. */

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [key in T[number]]: key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}