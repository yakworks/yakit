
import { SvelteComponentTyped } from 'svelte';


interface CardHeaderProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class CardHeader extends SvelteComponentTyped<
  CardHeaderProps,
  {  },
  {  'default' : {}; }
> {}

export default CardHeader;
