
import { SvelteComponentTyped } from 'svelte';

import { Popup } from 'framework7/types';


interface PopupProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tabletFullscreen ?: boolean;
  opened ?: boolean;
  animate ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeOnEscape ?: boolean;
  swipeToClose ?: boolean | string;
  swipeHandler ?: string | object;
  push ?: boolean;
  containerEl?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onPopupSwipeStart ?: (instance?: Popup.Popup) => void;
  onPopupSwipeMove ?: (instance?: Popup.Popup) => void;
  onPopupSwipeEnd ?: (instance?: Popup.Popup) => void;
  onPopupSwipeClose ?: (instance?: Popup.Popup) => void;
  onPopupOpen ?: (instance?: Popup.Popup) => void;
  onPopupOpened ?: (instance?: Popup.Popup) => void;
  onPopupClose ?: (instance?: Popup.Popup) => void;
  onPopupClosed ?: (instance?: Popup.Popup) => void;
}



class Popup extends SvelteComponentTyped<
  PopupProps,
  { popupSwipeStart: CustomEvent<void>; popupSwipeMove: CustomEvent<void>; popupSwipeEnd: CustomEvent<void>; popupSwipeClose: CustomEvent<void>; popupOpen: CustomEvent<void>; popupOpened: CustomEvent<void>; popupClose: CustomEvent<void>; popupClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Popup;
