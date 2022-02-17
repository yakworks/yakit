// eslint-disable-next-line
import { onMount, onDestroy } from 'svelte';
import { f7ready, app } from './f7';
import { extend } from './utils';
export var useSmartSelect = function useSmartSelect(props, setInstance, getEl) {
  var f7SmartSelect;
  onMount(function () {
    f7ready(function () {
      if (props.smartSelect) {
        var ssParams = extend({
          el: getEl()
        }, props.smartSelectParams || {});
        f7SmartSelect = app.f7.smartSelect.create(ssParams);
        setInstance(f7SmartSelect);
      }
    });
  });
  onDestroy(function () {
    if (f7SmartSelect && f7SmartSelect.destroy) {
      f7SmartSelect.destroy();
    }

    f7SmartSelect = null;
    setInstance(f7SmartSelect);
  });
};