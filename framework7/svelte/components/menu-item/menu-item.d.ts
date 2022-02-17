
import { SvelteComponentTyped } from 'svelte';


interface MenuItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  text?: string;
  iconOnly?: boolean;
  href?: string;
  link?: boolean;
  target?: string;
  dropdown?: boolean;
  tooltip ?: string;
  tooltipTrigger ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconAurora?: string;
  iconColor?: string;
  iconSize?: string | number;
  back?: boolean;
  external?: boolean;
  force?: boolean;
  animate?: boolean;
  ignoreCache?: boolean;
  reloadCurrent?: boolean;
  reloadAll?: boolean;
  reloadPrevious?: boolean;
  reloadDetail?: boolean;
  routeTabId?: string;
  view?: string;
  routeProps?: any;
  preventRouter?: boolean;
  transition?: string;
  openIn?: string;
  searchbarEnable?: boolean | string;
  searchbarDisable?: boolean | string;
  searchbarClear?: boolean | string;
  searchbarToggle?: boolean | string;
  panelOpen?: boolean | string;
  panelClose?: boolean | string;
  panelToggle?: boolean | string;
  popupOpen?: boolean | string;
  popupClose?: boolean | string;
  actionsOpen?: boolean | string;
  actionsClose?: boolean | string;
  popoverOpen?: boolean | string;
  popoverClose?: boolean | string;
  loginScreenOpen?: boolean | string;
  loginScreenClose?: boolean | string;
  sheetOpen?: boolean | string;
  sheetClose?: boolean | string;
  sortableEnable?: boolean | string;
  sortableDisable?: boolean | string;
  sortableToggle?: boolean | string;
  cardOpen?: boolean | string;
  cardPreventOpen?: boolean | string;
  cardClose?: boolean | string;
  menuClose?: boolean | string;
  onClick ?: (event?: any) => void;
  onMenuOpened ?: (el?: HTMLElement) => void;
  onMenuClosed ?: (el?: HTMLElement) => void;
}



class MenuItem extends SvelteComponentTyped<
  MenuItemProps,
  { click: CustomEvent<void>; menuOpened: CustomEvent<void>; menuClosed: CustomEvent<void>; },
  {  'text' : {};  'default' : {}; }
> {}

export default MenuItem;
