
import { SvelteComponentTyped } from 'svelte';


interface ViewsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  tabs?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Views extends SvelteComponentTyped<
  ViewsProps,
  {  },
  {  'default' : {}; }
> {}

export default Views;
