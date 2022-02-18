
import { SvelteComponentTyped } from 'svelte';

import { Panel } from 'framework7/types';


interface PanelProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  side ?: string;
  effect ?: string;
  cover ?: boolean;
  reveal ?: boolean;
  push ?: boolean;
  left ?: boolean;
  right ?: boolean;
  opened ?: boolean;
  resizable ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string;
  visibleBreakpoint ?: number;
  collapsedBreakpoint ?: number;
  swipe ?: boolean;
  swipeNoFollow ?: boolean;
  swipeOnlyClose ?: boolean;
  swipeActiveArea ?: number;
  swipeThreshold ?: number;
  containerEl ?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onPanelOpen ?: (event?: any) => void;
  onPanelOpened ?: (event?: any) => void;
  onPanelClose ?: (event?: any) => void;
  onPanelClosed ?: (event?: any) => void;
  onPanelBackdropClick ?: (event?: any) => void;
  onPanelSwipe ?: (event?: any) => void;
  onPanelSwipeOpen ?: (event?: any) => void;
  onPanelBreakpoint ?: (event?: any) => void;
  onPanelCollapsedBreakpoint ?: (event?: any) => void;
  onPanelResize ?: (...args: any[]) => void;
}



class Panel extends SvelteComponentTyped<
  PanelProps,
  { panelOpen: CustomEvent<void>; panelOpened: CustomEvent<void>; panelClose: CustomEvent<void>; panelClosed: CustomEvent<void>; panelBackdropClick: CustomEvent<void>; panelSwipe: CustomEvent<void>; panelSwipeOpen: CustomEvent<void>; panelBreakpoint: CustomEvent<void>; panelCollapsedBreakpoint: CustomEvent<void>; panelResize: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Panel;
