
import { SvelteComponentTyped } from 'svelte';

import { Toggle } from 'framework7/types';


interface ToggleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  init ?: boolean;
  checked ?: boolean;
  defaultChecked ?: boolean;
  disabled ?: boolean;
  readonly ?: boolean;
  name ?: string;
  value ?: string | number | Array<any>;
  tooltip ?: string;
  tooltipTrigger ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onToggleChange ?: (...args: any[]) => void;
  onChange ?: (event?: any) => void;
}



class Toggle extends SvelteComponentTyped<
  ToggleProps,
  { change: CustomEvent<void>; toggleChange: CustomEvent<void>; },
  {  }
> {}

export default Toggle;