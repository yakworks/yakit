// eslint-disable-next-line
import { onMount, onDestroy } from 'svelte';
import { f7, f7ready } from './f7';
export var useTab = function useTab(getEl, emit) {
  var onTabShow = function onTabShow(el) {
    if (getEl() !== el) return;
    emit('tabShow', [el]);
  };

  var onTabHide = function onTabHide(el) {
    if (getEl() !== el) return;
    emit('tabHide', [el]);
  };

  var attachEvents = function attachEvents() {
    if (!getEl()) return;
    f7ready(function () {
      f7.on('tabShow', onTabShow);
      f7.on('tabHide', onTabHide);
    });
  };

  var detachEvents = function detachEvents() {
    if (!f7) return;
    f7.off('tabShow', onTabShow);
    f7.off('tabHide', onTabHide);
  };

  onMount(function () {
    attachEvents();
  });
  onDestroy(function () {
    detachEvents();
  });
};