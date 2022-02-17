
import { SvelteComponentTyped } from 'svelte';


interface MenuProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Menu extends SvelteComponentTyped<
  MenuProps,
  {  },
  {  'default' : {}; }
> {}

export default Menu;
