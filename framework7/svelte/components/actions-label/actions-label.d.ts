
import { SvelteComponentTyped } from 'svelte';


interface ActionsLabelProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  bold?: boolean;
  onClick?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ActionsLabel extends SvelteComponentTyped<
  ActionsLabelProps,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default ActionsLabel;
