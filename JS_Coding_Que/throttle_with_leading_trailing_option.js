// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let timeId;
  let newArgs;
  const later = () => {
    if (newArgs && option.trailing) {
      func(...newArgs);
      newArgs = null;

      timeId = setTimeout(later, wait);
    } else {
      timeId = null;
    }
  };
  return (...args) => {
    if (timeId) {
      newArgs = args;
      return;
    }
    if (option.leading) {
      func(...args);
    } else {
      newArgs = args;
    }
    timeId = setTimeout(later, wait);
  };
}
