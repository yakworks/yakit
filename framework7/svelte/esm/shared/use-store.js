// eslint-disable-next-line
import { onDestroy } from 'svelte';
import { f7 } from './f7';
export var useStore = function useStore() {
  // (store, getter, callback)
  var store = arguments.length <= 0 ? undefined : arguments[0];
  var getter = arguments.length <= 1 ? undefined : arguments[1];
  var callback = arguments.length <= 2 ? undefined : arguments[2];

  if (arguments.length === 1) {
    // (getter)
    store = f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
  } else if (arguments.length === 2 && typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
    // (getter, callback)
    store = f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
    callback = arguments.length <= 1 ? undefined : arguments[1];
  } // eslint-disable-next-line


  var obj = store._gettersPlain[getter];
  var value = obj.value;

  if (callback) {
    obj.onUpdated(callback);
  }

  onDestroy(function () {
    if (callback) {
      // eslint-disable-next-line
      store.__removeCallback(callback);
    }
  });
  return value;
};