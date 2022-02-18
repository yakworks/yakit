
import { SvelteComponentTyped } from 'svelte';


interface ToolbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tabbar ?: boolean;
  labels ?: boolean;
  scrollable ?: boolean;
  hidden ?: boolean;
  noShadow ?: boolean;
  noHairline ?: boolean;
  noBorder ?: boolean;
  position ?: string;
  topMd ?: boolean;
  topIos ?: boolean;
  topAurora ?: boolean;
  top ?: boolean;
  bottomMd ?: boolean;
  bottomIos ?: boolean;
  bottomAurora ?: boolean;
  bottom ?: boolean;
  inner ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onToolbarHide ?: (...args: any[]) => void;
  onToolbarShow ?: (...args: any[]) => void;
}



class Toolbar extends SvelteComponentTyped<
  ToolbarProps,
  { toolbarShow: CustomEvent<void>; toolbarHide: CustomEvent<void>; },
  {  'before-inner' : {};  'default' : {};  'after-inner' : {}; }
> {}

export default Toolbar;
