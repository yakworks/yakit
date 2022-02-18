
import { SvelteComponentTyped } from 'svelte';


interface PreloaderProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  size ?: number | string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Preloader extends SvelteComponentTyped<
  PreloaderProps,
  {  },
  {  }
> {}

export default Preloader;
