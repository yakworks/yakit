
import { SvelteComponentTyped } from 'svelte';


interface BlockFooterProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class BlockFooter extends SvelteComponentTyped<
  BlockFooterProps,
  {  },
  {  'default' : {}; }
> {}

export default BlockFooter;
