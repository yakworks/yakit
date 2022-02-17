
import { SvelteComponentTyped } from 'svelte';


interface MenuDropdownProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  contentHeight ?: string;
  position ?: string;
  left ?: boolean;
  center ?: boolean;
  right ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class MenuDropdown extends SvelteComponentTyped<
  MenuDropdownProps,
  {  },
  {  'default' : {}; }
> {}

export default MenuDropdown;
