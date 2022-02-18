export var useRouteProps = function useRouteProps(el, routeProps) {
  if (el && routeProps) {
    el.f7RouteProps = routeProps;
  }

  return {
    update: function update(newValue) {
      if (el && el.f7RouteProps && !newValue) delete el.f7RouteProps;else if (el && newValue) el.f7RouteProps = newValue;
    },
    destroy: function destroy() {
      if (el && routeProps) {
        delete el.f7RouteProps;
      }
    }
  };
};