function createCounter(): { count: number } {
  let accessCount = 0;
  return {
    get count() {
      return accessCount++;
    },
  };
}
