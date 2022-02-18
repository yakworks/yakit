
import { SvelteComponentTyped } from 'svelte';


interface RowProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  noGap ?: boolean;
  tag ?: string;
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



class Row extends SvelteComponentTyped<
  RowProps,
  { click: CustomEvent<void>; gridResize: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Row;
