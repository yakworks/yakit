
import { SvelteComponentTyped } from 'svelte';


interface CardFooterProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class CardFooter extends SvelteComponentTyped<
  CardFooterProps,
  {  },
  {  'default' : {}; }
> {}

export default CardFooter;
