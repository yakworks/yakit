
import { SvelteComponentTyped } from 'svelte';

import { SwiperOptions } from 'swiper';


interface TabsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  animated ?: boolean;
  swipeable ?: boolean;
  routable ?: boolean;
  swiperParams ?: SwiperOptions;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Tabs extends SvelteComponentTyped<
  TabsProps,
  {  },
  {  'default' : {}; }
> {}

export default Tabs;
