
import { SvelteComponentTyped } from 'svelte';


interface TabProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  tabActive ?: boolean;
  onTabShow ?: (el?: HTMLElement) => void;
  onTabHide ?: (el?: HTMLElement) => void;
}



class Tab extends SvelteComponentTyped<
  TabProps,
  { tabRouterDidUpdate: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Tab;
