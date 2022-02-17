
import { SvelteComponentTyped } from 'svelte';


interface MessagesTitleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class MessagesTitle extends SvelteComponentTyped<
  MessagesTitleProps,
  {  },
  {  'default' : {}; }
> {}

export default MessagesTitle;
