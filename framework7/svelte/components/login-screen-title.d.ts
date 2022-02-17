
import { SvelteComponentTyped } from 'svelte';


interface LoginScreenTitleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class LoginScreenTitle extends SvelteComponentTyped<
  LoginScreenTitleProps,
  {  },
  {  'default' : {}; }
> {}

export default LoginScreenTitle;
