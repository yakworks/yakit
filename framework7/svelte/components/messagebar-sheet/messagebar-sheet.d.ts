
import { SvelteComponentTyped } from 'svelte';


interface MessagebarSheetProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class MessagebarSheet extends SvelteComponentTyped<
  MessagebarSheetProps,
  {  },
  {  'default' : {}; }
> {}

export default MessagebarSheet;
