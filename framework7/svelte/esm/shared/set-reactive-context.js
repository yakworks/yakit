// eslint-disable-next-line
import { setContext, beforeUpdate } from 'svelte';
export var setReactiveContext = function setReactiveContext(name, getValue) {
  var contextCallbacks = [];

  var contextSubscribe = function contextSubscribe(callback) {
    contextCallbacks.push(callback);
  };

  var contextUnsubscribe = function contextUnsubscribe(callback) {
    if (contextCallbacks.indexOf(callback) >= 0) {
      contextCallbacks.splice(contextCallbacks.indexOf, callback);
    }
  };

  var contextRunCallbacks = function contextRunCallbacks() {
    contextCallbacks.forEach(function (callback) {
      callback(getValue());
    });
  };

  setContext(name, {
    value: getValue(),
    subscribe: contextSubscribe,
    unsubscribe: contextUnsubscribe
  });
  beforeUpdate(function () {
    contextRunCallbacks();
  });
};