
import { SvelteComponentTyped } from 'svelte';


interface AppbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  noShadow?: boolean;
  noHairline?: boolean;
  inner?: boolean;
  innerClass?: string;
  innerClassName?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Appbar extends SvelteComponentTyped<
  AppbarProps,
  {  },
  {  'before-inner' : {};  'default' : {};  'after-inner' : {}; }
> {}

export default Appbar;
