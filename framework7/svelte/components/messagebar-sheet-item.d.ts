
import { SvelteComponentTyped } from 'svelte';


interface MessagebarSheetItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class MessagebarSheetItem extends SvelteComponentTyped<
  MessagebarSheetItemProps,
  {  },
  {  'default' : {}; }
> {}

export default MessagebarSheetItem;
