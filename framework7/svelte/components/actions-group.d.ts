
import { SvelteComponentTyped } from 'svelte';


interface ActionsGroupProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class ActionsGroup extends SvelteComponentTyped<
  ActionsGroupProps,
  {  },
  {  'default' : {}; }
> {}

export default ActionsGroup;
