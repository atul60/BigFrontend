type MyRequired<T extends object> = {[key in keyof T] -?: T[key]}