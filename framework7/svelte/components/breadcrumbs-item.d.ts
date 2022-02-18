
import { SvelteComponentTyped } from 'svelte';


interface BreadcrumbsItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  onClick ?: (event?: any) => void;
  active?: boolean;
}



class BreadcrumbsItem extends SvelteComponentTyped<
  BreadcrumbsItemProps,
  {  },
  {  'default' : {}; }
> {}

export default BreadcrumbsItem;
