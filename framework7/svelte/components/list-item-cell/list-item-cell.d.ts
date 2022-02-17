
import { SvelteComponentTyped } from 'svelte';


interface ListItemCellProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ListItemCell extends SvelteComponentTyped<
  ListItemCellProps,
  {  },
  {  'default' : {}; }
> {}

export default ListItemCell;
