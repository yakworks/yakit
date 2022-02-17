
import { SvelteComponentTyped } from 'svelte';


interface BreadcrumbsCollapsedProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  onClick ?: (event?: any) => void;
}



class BreadcrumbsCollapsed extends SvelteComponentTyped<
  BreadcrumbsCollapsedProps,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default BreadcrumbsCollapsed;
