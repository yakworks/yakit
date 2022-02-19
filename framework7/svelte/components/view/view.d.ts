
import { SvelteComponentTyped } from 'svelte';

  import { View, Router } from 'framework7/types';


interface ViewProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tab ?: boolean;
  tabActive ?: boolean;
  name ?: string;
  router ?: boolean;
  linksView ?: Object | string;
  url ?: string;
  main ?: boolean;
  stackPages ?: boolean;
  xhrCache ?: boolean;
  xhrCacheIgnore ?: Array<any>;
  xhrCacheIgnoreGetParameters ?: boolean;
  xhrCacheDuration ?: number;
  preloadPreviousPage ?: boolean;
  allowDuplicateUrls ?: boolean;
  reloadPages ?: boolean;
  reloadDetail ?: boolean;
  masterDetailResizable ?: boolean;
  masterDetailBreakpoint ?: number;
  removeElements ?: boolean;
  removeElementsWithTimeout ?: boolean;
  removeElementsTimeout ?: number;
  restoreScrollTopOnBack ?: boolean;
  loadInitialPage ?: boolean;
  iosSwipeBack ?: boolean;
  iosSwipeBackAnimateShadow ?: boolean;
  iosSwipeBackAnimateOpacity ?: boolean;
  iosSwipeBackActiveArea ?: number;
  iosSwipeBackThreshold ?: number;
  mdSwipeBack ?: boolean;
  mdSwipeBackAnimateShadow ?: boolean;
  mdSwipeBackAnimateOpacity ?: boolean;
  mdSwipeBackActiveArea ?: number;
  mdSwipeBackThreshold ?: number;
  auroraSwipeBack ?: boolean;
  auroraSwipeBackAnimateShadow ?: boolean;
  auroraSwipeBackAnimateOpacity ?: boolean;
  auroraSwipeBackActiveArea ?: number;
  auroraSwipeBackThreshold ?: number;
  browserHistory ?: boolean;
  browserHistoryRoot ?: string;
  browserHistoryAnimate ?: boolean;
  browserHistoryAnimateOnLoad ?: boolean;
  browserHistorySeparator ?: string;
  browserHistoryOnLoad ?: boolean;
  browserHistoryInitialMatch?: boolean;
  browserHistoryStoreHistory?: boolean;
  animate ?: boolean;
  transition ?: string;
  iosDynamicNavbar ?: boolean;
  iosAnimateNavbarBackIcon ?: boolean;
  materialPageLoadDelay ?: number;
  passRouteQueryToRequest ?: boolean;
  passRouteParamsToRequest ?: boolean;
  routes ?: Array<any>;
  routesAdd ?: Array<any>;
  routesBeforeEnter ?: Function | Array<any>;
  routesBeforeLeave ?: Function | Array<any>;
  init ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onViewInit ?: (view?: View.View) => void;
  onViewResize ?: (width?: number) => void;
  onSwipeBackMove ?: (swipeBackData?: Router.SwipeBackData) => void;
  onSwipeBackBeforeChange ?: (swipeBackData?: Router.SwipeBackData) => void;
  onSwipeBackAfterChange ?: (swipeBackData?: Router.SwipeBackData) => void;
  onSwipeBackBeforeReset ?: (swipeBackData?: Router.SwipeBackData) => void;
  onSwipeBackAfterReset ?: (swipeBackData?: Router.SwipeBackData) => void;
  onTabShow ?: (el?: HTMLElement) => void;
  onTabHide ?: (el?: HTMLElement) => void;
}



class View extends SvelteComponentTyped<
  ViewProps,
  { viewInit: CustomEvent<void>; viewResize: CustomEvent<void>; swipeBackMove: CustomEvent<void>; swipeBackBeforeChange: CustomEvent<void>; swipeBackAfterChange: CustomEvent<void>; swipeBackBeforeReset: CustomEvent<void>; swipeBackAfterReset: CustomEvent<void>; viewRouterDidUpdate: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default View;