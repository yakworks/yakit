
import { SvelteComponentTyped } from 'svelte';


interface ActionsButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  bold?: boolean;
  close?: boolean;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ActionsButton extends SvelteComponentTyped<
  ActionsButtonProps,
  { click: CustomEvent<void>; },
  {  'media' : {};  'default' : {}; }
> {}

export default ActionsButton;
