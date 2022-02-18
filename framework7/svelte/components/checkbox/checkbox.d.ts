
import { SvelteComponentTyped } from 'svelte';


interface CheckboxProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  checked ?: boolean;
  indeterminate ?: boolean;
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



class Checkbox extends SvelteComponentTyped<
  CheckboxProps,
  { change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Checkbox;
