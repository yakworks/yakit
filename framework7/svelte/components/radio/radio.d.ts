
import { SvelteComponentTyped } from 'svelte';


interface RadioProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  checked ?: boolean;
  name ?: number | string;
  value ?: number | string | boolean;
  disabled ?: boolean;
  readonly ?: boolean;
  defaultChecked ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onChange ?: (event?: any) => void;
}



class Radio extends SvelteComponentTyped<
  RadioProps,
  { change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Radio;
