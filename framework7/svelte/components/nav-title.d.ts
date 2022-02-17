
import { SvelteComponentTyped } from 'svelte';


interface NavTitleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  title ?: string;
  subtitle ?: string;
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class NavTitle extends SvelteComponentTyped<
  NavTitleProps,
  {  },
  {  'default' : {}; }
> {}

export default NavTitle;
