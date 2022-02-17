
import { SvelteComponentTyped } from 'svelte';


interface FabButtonsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  position?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class FabButtons extends SvelteComponentTyped<
  FabButtonsProps,
  {  },
  {  'default' : {}; }
> {}

export default FabButtons;
