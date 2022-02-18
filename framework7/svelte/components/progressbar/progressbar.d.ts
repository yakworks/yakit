
import { SvelteComponentTyped } from 'svelte';


interface ProgressbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  progress ?: number;
  infinite ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Progressbar extends SvelteComponentTyped<
  ProgressbarProps,
  {  },
  {  }
> {}

export default Progressbar;
