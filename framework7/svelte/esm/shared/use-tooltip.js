import { app, f7ready } from './f7';
export var useTooltip = function useTooltip(el, props) {
  var f7Tooltip = null;
  var tooltip = props.tooltip,
      tooltipTrigger = props.tooltipTrigger;

  if (el && tooltip) {
    f7ready(function () {
      f7Tooltip = app.f7.tooltip.create({
        targetEl: el,
        text: tooltip,
        trigger: tooltipTrigger
      });
    });
  }

  return {
    update: function update(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          value = _ref.tooltip;

      if (!value && f7Tooltip) {
        f7Tooltip.destroy();
        f7Tooltip = null;
        return;
      }

      if (value && !f7Tooltip && app.f7) {
        f7Tooltip = app.f7.tooltip.create({
          targetEl: el,
          text: value,
          trigger: tooltipTrigger
        });
        return;
      }

      if (!value || !f7Tooltip) return;
      f7Tooltip.setText(value);
    },
    destroy: function destroy() {
      if (f7Tooltip && f7Tooltip.destroy) {
        f7Tooltip.destroy();
        f7Tooltip = null;
      }
    }
  };
};