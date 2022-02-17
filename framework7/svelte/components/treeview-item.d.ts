
import { SvelteComponentTyped } from 'svelte';


interface TreeviewItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  toggle ?: boolean;
  itemToggle ?: boolean;
  selectable ?: boolean;
  selected ?: boolean;
  opened ?: boolean;
  label ?: string;
  loadChildren ?: boolean;
  link ?: boolean | string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
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
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconAurora?: string;
  iconColor?: string;
  iconSize?: string | number;
  onClick ?: (event?: any) => void;
  onTreeviewOpen ?: (el?: HTMLElement) => void;
  onTreeviewClose ?: (el?: HTMLElement) => void;
  onTreeviewLoadChildren ?: (el?: HTMLElement, done?: any) => void;
}



class TreeviewItem extends SvelteComponentTyped<
  TreeviewItemProps,
  { click: CustomEvent<void>; treeviewOpen: CustomEvent<void>; treeviewClose: CustomEvent<void>; treeviewLoadChildren: CustomEvent<void>; },
  {  'root-start' : {};  'content-start' : {};  'media' : {};  'label-start' : {};  'label' : {};  'content' : {};  'content-end' : {};  'root' : {};  'root-end' : {};  'children-start' : {};  'default' : {};  'children' : {}; }
> {}

export default TreeviewItem;
