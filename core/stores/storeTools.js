
/**
 * Normally the subscribe function is executed immediately upon subscription, even though value has not changed
 * This skips that one and waits until a change fires it. https://stackoverflow.com/a/66819321
 * @param {*} store the store to subscribe
 * @param {*} fn the normal sub function
 * @returns the function to pass to unsubscribe
 */
export function subscribeWait(store, fn) {
  let firedFirst = false;
  return store.subscribe(state => {
      if (!firedFirst) {
          firedFirst = true;
      } else {
          fn(state);
      }
  })
}

/**
 * Subscribes once and then immediately invoke to unsubscribe
 */
export function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)(); // immediately invoke to unsubscribe
  });
}
