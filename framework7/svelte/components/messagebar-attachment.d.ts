
import { SvelteComponentTyped } from 'svelte';


interface MessagebarAttachmentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  image ?: string;
  deletable ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onAttachmentClick ?: (event?: any) => void;
  onAttachmentDelete ?: (event?: any) => void;
}



class MessagebarAttachment extends SvelteComponentTyped<
  MessagebarAttachmentProps,
  { attachmentClick: CustomEvent<void>; attachmentDelete: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default MessagebarAttachment;
