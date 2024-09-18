type MyOmit<T, K extends keyof any> = {
    [key in keyof T as key extends K ? never : key] : T[key]
  }