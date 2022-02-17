
import { SvelteComponentTyped } from 'svelte';


interface ListItemRowProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ListItemRow extends SvelteComponentTyped<
  ListItemRowProps,
  {  },
  {  'default' : {}; }
> {}

export default ListItemRow;
