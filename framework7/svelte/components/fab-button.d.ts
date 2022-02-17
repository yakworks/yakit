
import { SvelteComponentTyped } from 'svelte';


interface FabButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  fabClose ?: boolean;
  label ?: string;
  target ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class FabButton extends SvelteComponentTyped<
  FabButtonProps,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default FabButton;
