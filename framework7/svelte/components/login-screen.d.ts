
import { SvelteComponentTyped } from 'svelte';

import { LoginScreen } from 'framework7/types';


interface LoginScreenProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  opened?: boolean;
  animate?: boolean;
  containerEl ?: string | object;
  onLoginScreenOpen ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenOpened ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenClose ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenClosed ?: (instance: LoginScreen.LoginScreen) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class LoginScreen extends SvelteComponentTyped<
  LoginScreenProps,
  {  },
  {  'default' : {}; }
> {}

export default LoginScreen;
