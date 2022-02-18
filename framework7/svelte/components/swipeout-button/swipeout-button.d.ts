
import { SvelteComponentTyped } from 'svelte';


interface SwipeoutButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  text ?: string;
  confirmTitle ?: string;
  confirmText ?: string;
  overswipe ?: boolean;
  close ?: boolean;
  delete ?: boolean;
  href ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onClick ?: (event?: any) => void;
}



class SwipeoutButton extends SvelteComponentTyped<
  SwipeoutButtonProps,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default SwipeoutButton;
