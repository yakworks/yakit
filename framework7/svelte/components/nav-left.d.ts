
import { SvelteComponentTyped } from 'svelte';


interface NavLeftProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  backLink ?: boolean | string;
  backLinkUrl ?: string;
  backLinkForce ?: boolean;
  backLinkShowText ?: boolean;
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onBackClick ?: (event?: any) => void;
  onClickBack ?: (event?: any) => void;
}



class NavLeft extends SvelteComponentTyped<
  NavLeftProps,
  { clickBack: CustomEvent<void>; backClick: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default NavLeft;
