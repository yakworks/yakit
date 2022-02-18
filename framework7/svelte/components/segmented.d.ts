
import { SvelteComponentTyped } from 'svelte';


interface SegmentedProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  raised ?: boolean;
  raisedIos ?: boolean;
  raisedMd ?: boolean;
  raisedAurora ?: boolean;
  round ?: boolean;
  roundIos ?: boolean;
  roundMd ?: boolean;
  roundAurora ?: boolean;
  strong ?: boolean;
  strongIos ?: boolean;
  strongMd ?: boolean;
  strongAurora ?: boolean;
  tag ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Segmented extends SvelteComponentTyped<
  SegmentedProps,
  {  },
  {  'default' : {}; }
> {}

export default Segmented;
