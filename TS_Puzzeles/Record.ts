type MyRecord<K extends number | string | symbol, V> = {
    [X in K]: V
  }