
import { SvelteComponentTyped } from 'svelte';


interface ListIndexProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  init ?: boolean;
  listEl ?: string | object;
  indexes ?: string | Array<any>;
  scrollList ?: boolean;
  label ?: boolean;
  iosItemHeight ?: number;
  mdItemHeight ?: number;
  auroraItemHeight ?: number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onListIndexSelect ?: (itemContent?: any, itemIndex?: any) => void;
}



class ListIndex extends SvelteComponentTyped<
  ListIndexProps,
  { listIndexSelect: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default ListIndex;
