
import { SvelteComponentTyped } from 'svelte';

import { PhotoBrowser } from 'framework7/types';


interface PhotoBrowserProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  init ?: boolean;
  params ?: Object;
  photos ?: Array<any>;
  exposition ?: boolean;
  expositionHideCaptions ?: boolean;
  type ?: string;
  navbar ?: boolean;
  toolbar ?: boolean;
  theme ?: string;
  captionsTheme ?: string;
  iconsColor ?: string;
  swipeToClose ?: boolean;
  pageBackLinkText ?: string;
  popupCloseLinkText ?: string;
  navbarOfText ?: string;
  navbarShowCount ?: boolean;
  swiper ?: Object;
  url ?: string;
  routableModals ?: boolean;
  virtualSlides ?: boolean;
  view ?: string | object;
  renderNavbar ?: Function;
  renderToolbar ?: Function;
  renderCaption ?: Function;
  renderObject ?: Function;
  renderLazyPhoto ?: Function;
  renderPhoto ?: Function;
  renderPage ?: Function;
  renderPopup ?: Function;
  renderStandalone ?: Function;
  onPhotoBrowserOpen ?: (...args: any[]) => void;
  onPhotoBrowserClose ?: (...args: any[]) => void;
  onPhotoBrowserOpened ?: (...args: any[]) => void;
  onPhotoBrowserClosed ?: (...args: any[]) => void;
  onPhotoBrowserSwipeToClose ?: (...args: any[]) => void;
}



class PhotoBrowser extends SvelteComponentTyped<
  PhotoBrowserProps,
  { photoBrowserOpen: CustomEvent<void>; photoBrowserClose: CustomEvent<void>; photoBrowserOpened: CustomEvent<void>; photoBrowserClosed: CustomEvent<void>; photoBrowserSwipeToClose: CustomEvent<void>; },
  {  }
> {}

export default PhotoBrowser;