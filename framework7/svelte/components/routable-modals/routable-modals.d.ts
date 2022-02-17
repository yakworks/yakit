
import { SvelteComponentTyped } from 'svelte';


interface RoutableModalsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  
}



class RoutableModals extends SvelteComponentTyped<
  RoutableModalsProps,
  { modalsRouterDidUpdate: CustomEvent<void>; },
  {  }
> {}

export default RoutableModals;
