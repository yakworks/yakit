
import { SvelteComponentTyped } from 'svelte';


interface ColProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tag ?: string;
  width ?: number | string;
  xsmall ?: number | string;
  small ?: number | string;
  medium ?: number | string;
  large ?: number | string;
  xlarge ?: number | string;
  resizable ?: boolean;
  resizableFixed ?: boolean;
  resizableAbsolute ?: boolean;
  resizableHandler ?: boolean;
  onClick ?: (event?: any) => void;
  onGridResize ?: (...args: any[]) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Col extends SvelteComponentTyped<
  ColProps,
  { click: CustomEvent<void>; gridResize: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Col;