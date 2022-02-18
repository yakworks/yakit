
import { SvelteComponentTyped } from 'svelte';


interface ListGroupProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  mediaList ?: boolean;
  sortable ?: boolean;
  sortableOpposite ?: boolean;
  sortableTapHold ?: boolean;
  sortableMoveElements ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ListGroup extends SvelteComponentTyped<
  ListGroupProps,
  {  },
  {  'default' : {}; }
> {}

export default ListGroup;
