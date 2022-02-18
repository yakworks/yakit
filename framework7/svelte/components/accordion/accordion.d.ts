
import { SvelteComponentTyped } from 'svelte';


interface AccordionProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  accordionOpposite?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Accordion extends SvelteComponentTyped<
  AccordionProps,
  {  },
  {  'default' : {}; }
> {}

export default Accordion;
