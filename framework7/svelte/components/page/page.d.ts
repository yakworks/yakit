
import { SvelteComponentTyped } from 'svelte';


interface PageProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  name ?: string;
  stacked ?: boolean;
  withSubnavbar ?: boolean;
  subnavbar ?: boolean;
  withNavbarLarge ?: boolean;
  navbarLarge ?: boolean;
  noNavbar ?: boolean;
  noToolbar ?: boolean;
  tabs ?: boolean;
  pageContent ?: boolean;
  noSwipeback ?: boolean;
  ptr ?: boolean;
  ptrDistance ?: number;
  ptrPreloader ?: boolean;
  ptrBottom ?: boolean;
  ptrMousewheel ?: boolean;
  infinite ?: boolean;
  infiniteTop ?: boolean;
  infiniteDistance ?: number;
  infinitePreloader ?: boolean;
  hideBarsOnScroll ?: boolean;
  hideNavbarOnScroll ?: boolean;
  hideToolbarOnScroll ?: boolean;
  messagesContent ?: boolean;
  loginScreen ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onPtrPullStart ?: (...args: any[]) => void;
  onPtrPullMove ?: (...args: any[]) => void;
  onPtrPullEnd ?: (...args: any[]) => void;
  onPtrRefresh ?: (...args: any[]) => void;
  onPtrDone ?: (...args: any[]) => void;
  onInfinite ?: (...args: any[]) => void;
  onPageMounted ?: (page?: any) => void;
  onPageInit ?: (page?: any) => void;
  onPageReinit ?: (page?: any) => void;
  onPageBeforeIn ?: (page?: any) => void;
  onPageBeforeOut ?: (page?: any) => void;
  onPageAfterOut ?: (page?: any) => void;
  onPageAfterIn ?: (page?: any) => void;
  onPageBeforeRemove ?: (page?: any) => void;
  onPageBeforeUnmount ?: (page?: any) => void;
  onPageTabShow ?: (...args: any[]) => void;
  onPageTabHide ?: (...args: any[]) => void;
}



class Page extends SvelteComponentTyped<
  PageProps,
  { ptrPullStart: CustomEvent<void>; ptrPullMove: CustomEvent<void>; ptrPullEnd: CustomEvent<void>; ptrRefresh: CustomEvent<void>; ptrDone: CustomEvent<void>; infinite: CustomEvent<void>; pageMounted: CustomEvent<void>; pageInit: CustomEvent<void>; pageReinit: CustomEvent<void>; pageBeforeIn: CustomEvent<void>; pageBeforeOut: CustomEvent<void>; pageAfterOut: CustomEvent<void>; pageAfterIn: CustomEvent<void>; pageBeforeRemove: CustomEvent<void>; pageBeforeUnmount: CustomEvent<void>; pageTabShow: CustomEvent<void>; pageTabHide: CustomEvent<void>; },
  {  'fixed' : {};  'static' : {};  'default' : {}; }
> {}

export default Page;