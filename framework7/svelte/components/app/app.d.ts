
import { SvelteComponentTyped } from 'svelte';

  import { Framework7Parameters } from 'framework7/types';


interface AppProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}

 interface AppProps extends Framework7Parameters {}

class App extends SvelteComponentTyped<
  AppProps,
  {  },
  {  'default' : {}; }
> {}

export default App;
