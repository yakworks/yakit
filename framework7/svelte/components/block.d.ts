
import { SvelteComponentTyped } from 'svelte';


interface BlockProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  inset?: boolean;
  xsmallInset?: boolean;
  smallInset?: boolean;
  mediumInset?: boolean;
  largeInset?: boolean;
  xlargeInset?: boolean;
  strong?: boolean;
  tabs?: boolean;
  tab?: boolean;
  tabActive?: boolean;
  accordionList?: boolean;
  accordionOpposite?: boolean;
  noHairlines?: boolean;
  noHairlinesMd?: boolean;
  noHairlinesIos?: boolean;
  noHairlinesAurora?: boolean;
  onTabShow?: (el?: HTMLElement) => void;
  onTabHide?: (el?: HTMLElement) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Block extends SvelteComponentTyped<
  BlockProps,
  {  },
  {  'default' : {}; }
> {}

export default Block;
