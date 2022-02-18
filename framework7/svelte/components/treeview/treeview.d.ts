
import { SvelteComponentTyped } from 'svelte';


interface TreeviewProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Treeview extends SvelteComponentTyped<
  TreeviewProps,
  {  },
  {  'default' : {}; }
> {}

export default Treeview;
