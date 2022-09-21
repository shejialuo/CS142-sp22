'use strict';

// `cs142MakeMultiFilter` takes an array as a parameter
// and returns a function that can be used to filter the
// elements of this array. The returned function (`arrayFilterer`)
// internally keeps track of a notion called `currentArray`.
function cs142MakeMultiFilter(originalArray) {
  let currentArray = originalArray;
  return function arrayFilterer(filterCriteria, callback) {
    if (typeof(filterCriteria) === "function") {
      currentArray = currentArray.filter(filterCriteria);
    } else {
      return currentArray;
    }
    if (typeof(callback) === "function") {
      /*
        * Here, we use call method to change the `this` pointer.
        * there are also two methods, apply and bind.
      */
      callback.call(originalArray, currentArray);
    }
    return arrayFilterer;
  };
}
