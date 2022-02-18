
import { SvelteComponentTyped } from 'svelte';


interface BlockHeaderProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class BlockHeader extends SvelteComponentTyped<
  BlockHeaderProps,
  {  },
  {  'default' : {}; }
> {}

export default BlockHeader;
