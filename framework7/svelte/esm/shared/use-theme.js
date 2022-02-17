import { f7ready, app } from './f7';
export var useTheme = function useTheme(set) {
  var t = app.f7 ? app.theme : null;

  if (!app.f7) {
    f7ready(function () {
      set(app.theme);
    });
  }

  return t;
};