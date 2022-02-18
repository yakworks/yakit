
import { SvelteComponentTyped } from 'svelte';


interface CardContentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  padding?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class CardContent extends SvelteComponentTyped<
  CardContentProps,
  {  },
  {  'default' : {}; }
> {}

export default CardContent;
