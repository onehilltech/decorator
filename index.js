const { isFunction } = require ('lodash');

module.exports = function decorator (decoratorFn) {
  return function (target, name, descriptor) {
    if (descriptor || isFunction (target)) {
      return decoratorFn (target, name, descriptor, {});
    }
    else {
      let options = target;

      return function (target, name, descriptor) {
        return decoratorFn (target, name, descriptor, options);
      }
    }
  }
}
