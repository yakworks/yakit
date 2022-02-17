
import { SvelteComponentTyped } from 'svelte';


interface SwipeoutActionsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  left ?: boolean;
  right ?: boolean;
  side ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class SwipeoutActions extends SvelteComponentTyped<
  SwipeoutActionsProps,
  {  },
  {  'default' : {}; }
> {}

export default SwipeoutActions;
