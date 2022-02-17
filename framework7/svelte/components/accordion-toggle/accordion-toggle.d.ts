
import { SvelteComponentTyped } from 'svelte';


interface AccordionToggleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class AccordionToggle extends SvelteComponentTyped<
  AccordionToggleProps,
  {  },
  {  'default' : {}; }
> {}

export default AccordionToggle;
