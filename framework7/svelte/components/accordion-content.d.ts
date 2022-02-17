
import { SvelteComponentTyped } from 'svelte';


interface AccordionContentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class AccordionContent extends SvelteComponentTyped<
  AccordionContentProps,
  {  },
  {  'default' : {}; }
> {}

export default AccordionContent;
