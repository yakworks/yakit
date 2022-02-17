
import { SvelteComponentTyped } from 'svelte';


interface SubnavbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  sliding ?: boolean;
  title ?: string;
  inner ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Subnavbar extends SvelteComponentTyped<
  SubnavbarProps,
  {  },
  {  'default' : {}; }
> {}

export default Subnavbar;
