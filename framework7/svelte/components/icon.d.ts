
import { SvelteComponentTyped } from 'svelte';


interface IconProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  material ?: string;
  f7 ?: string;
  icon ?: string;
  ios ?: string;
  aurora ?: string;
  md ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  size ?: string | number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Icon extends SvelteComponentTyped<
  IconProps,
  {  },
  {  'default' : {}; }
> {}

export default Icon;
