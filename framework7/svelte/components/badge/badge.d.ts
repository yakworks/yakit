
import { SvelteComponentTyped } from 'svelte';

import { Tooltip } from 'framework7/types';


interface BadgeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tooltip?: string;
  tooltipTrigger?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Badge extends SvelteComponentTyped<
  BadgeProps,
  {  },
  {  'default' : {}; }
> {}

export default Badge;
