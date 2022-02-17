
import { SvelteComponentTyped } from 'svelte';


interface FabProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  morphTo ?: string;
  href ?: boolean | string;
  target ?: string;
  text ?: string;
  position ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Fab extends SvelteComponentTyped<
  FabProps,
  { click: CustomEvent<void>; },
  {  'default' : {};  'text' : {};  'link' : {};  'root' : {}; }
> {}

export default Fab;
