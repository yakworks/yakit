
import { SvelteComponentTyped } from 'svelte';


interface BlockTitleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  large?: boolean;
  medium?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class BlockTitle extends SvelteComponentTyped<
  BlockTitleProps,
  {  },
  {  'default' : {}; }
> {}

export default BlockTitle;
