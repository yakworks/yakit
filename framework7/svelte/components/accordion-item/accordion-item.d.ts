
import { SvelteComponentTyped } from 'svelte';


interface AccordionItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  opened?: boolean;
  onAccordionBeforeOpen ?: (prevent?: any) => void;
  onAccordionOpen ?: (...args: any[]) => void;
  onAccordionOpened ?: (...args: any[]) => void;
  onAccordionBeforeClose ?: (prevent?: any) => void;
  onAccordionClose ?: (...args: any[]) => void;
  onAccordionClosed ?: (...args: any[]) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class AccordionItem extends SvelteComponentTyped<
  AccordionItemProps,
  { accordionBeforeOpen: CustomEvent<void>; accordionOpen: CustomEvent<void>; accordionOpened: CustomEvent<void>; accordionBeforeClose: CustomEvent<void>; accordionClose: CustomEvent<void>; accordionClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default AccordionItem;
