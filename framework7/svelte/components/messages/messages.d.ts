
import { SvelteComponentTyped } from 'svelte';

import { Messages } from 'framework7/types';


interface MessagesProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  autoLayout ?: boolean;
  messages ?: Array<any>;
  newMessagesFirst ?: boolean;
  scrollMessages ?: boolean;
  scrollMessagesOnEdge ?: boolean;
  typing?: boolean;
  firstMessageRule ?: Function;
  lastMessageRule ?: Function;
  tailMessageRule ?: Function;
  sameNameMessageRule ?: Function;
  sameHeaderMessageRule ?: Function;
  sameFooterMessageRule ?: Function;
  sameAvatarMessageRule ?: Function;
  customClassMessageRule ?: Function;
  renderMessage ?: Function;
  init ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Messages extends SvelteComponentTyped<
  MessagesProps,
  {  },
  {  'default' : {}; }
> {}

export default Messages;
