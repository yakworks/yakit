var ignoreProps = ['color', 'colorTheme', 'textColor', 'bgColor', 'borderColor', 'rippleColor', 'themeDark', 'force', 'reloadCurrent', 'reloadPrevious', 'reloadAll', 'reloadDetail', 'animate', 'ignoreCache', 'routeTabId', 'view', 'transition', 'openIn', 'back', 'linkBack', 'external', 'preventRouter', 'searchbarEnable', 'searchbarDisable', 'searchbarClear', 'searchbarToggle', 'panelOpen', 'panelClose', 'panelToggle', 'popupOpen', 'popupClose', 'actionsOpen', 'actionsClose', 'popoverOpen', 'popoverClose', 'loginScreenOpen', 'loginScreenClose', 'sheetOpen', 'sheetClose', 'sortableEnable', 'sortableDisable', 'sortableToggle', 'cardOpen', 'cardClose'];
export function restProps(rest) {
  if (rest === void 0) {
    rest = {};
  }

  var props = {};
  Object.keys(rest).filter(function (prop) {
    return !ignoreProps.includes(prop);
  }).forEach(function (key) {
    if (key.indexOf('on') !== 0) {
      props[key] = rest[key];
    }
  });
  return props;
}