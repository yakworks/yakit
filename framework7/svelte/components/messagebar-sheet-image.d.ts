
import { SvelteComponentTyped } from 'svelte';


interface MessagebarSheetImageProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  image ?: string;
  checked ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onChecked ?: (event?: any) => void;
  onUnchecked ?: (event?: any) => void;
  onChange ?: (event?: any) => void;
}



class MessagebarSheetImage extends SvelteComponentTyped<
  MessagebarSheetImageProps,
  { checked: CustomEvent<void>; unchecked: CustomEvent<void>; change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default MessagebarSheetImage;
