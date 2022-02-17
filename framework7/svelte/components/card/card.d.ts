
import { SvelteComponentTyped } from 'svelte';


interface CardProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  title ?: string | number;
  content ?: string | number;
  footer ?: string | number;
  outline ?: boolean;
  expandable ?: boolean;
  expandableAnimateWidth ?: boolean;
  expandableOpened ?: boolean;
  animate ?: boolean;
  hideNavbarOnOpen ?: boolean;
  hideToolbarOnOpen ?: boolean;
  hideStatusbarOnOpen ?: boolean;
  scrollableEl ?: string;
  swipeToClose ?: boolean;
  closeByBackdropClick ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string;
  noShadow ?: boolean;
  noBorder ?: boolean;
  padding ?: boolean;
  onCardBeforeOpen ?: (el?: HTMLElement, prevent?: any) => void;
  onCardOpen ?: (el?: HTMLElement) => void;
  onCardOpened ?: (el?: HTMLElement, pageEl?: HTMLElement) => void;
  onCardClose ?: (el?: HTMLElement) => void;
  onCardClosed ?: (el?: HTMLElement, pageEl?: HTMLElement) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Card extends SvelteComponentTyped<
  CardProps,
  { cardBeforeOpen: CustomEvent<void>; cardOpen: CustomEvent<void>; cardOpened: CustomEvent<void>; cardClose: CustomEvent<void>; cardClosed: CustomEvent<void>; },
  {  'header' : {};  'content' : {};  'footer' : {};  'default' : {}; }
> {}

export default Card;
