
import { SvelteComponentTyped } from 'svelte';


interface MessagebarAttachmentsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class MessagebarAttachments extends SvelteComponentTyped<
  MessagebarAttachmentsProps,
  {  },
  {  'default' : {}; }
> {}

export default MessagebarAttachments;
