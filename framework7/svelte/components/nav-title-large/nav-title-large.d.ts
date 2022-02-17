
import { SvelteComponentTyped } from 'svelte';


interface NavTitleLargeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class NavTitleLarge extends SvelteComponentTyped<
  NavTitleLargeProps,
  {  },
  {  'default' : {}; }
> {}

export default NavTitleLarge;
