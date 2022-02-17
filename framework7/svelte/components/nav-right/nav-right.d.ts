
import { SvelteComponentTyped } from 'svelte';


interface NavRightProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class NavRight extends SvelteComponentTyped<
  NavRightProps,
  {  },
  {  'default' : {}; }
> {}

export default NavRight;
