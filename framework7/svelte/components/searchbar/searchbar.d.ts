
import { SvelteComponentTyped } from 'svelte';

import { Searchbar } from 'framework7/types';


interface SearchbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  noShadow ?: boolean;
  noHairline ?: boolean;
  form ?: boolean;
  placeholder ?: string;
  disableButton ?: boolean;
  disableButtonText ?: string;
  clearButton ?: boolean;
  value ?: string | number | Array<any>;
  inputEvents ?: string;
  expandable ?: boolean;
  inline ?: boolean;
  searchContainer ?: string | object;
  searchIn ?: string;
  searchItem ?: string;
  searchGroup ?: string;
  searchGroupTitle ?: string;
  foundEl ?: string | object;
  notFoundEl ?: string | object;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  hideOnEnableEl ?: string | object;
  hideOnSearchEl ?: string | object;
  ignore ?: string;
  customSearch ?: boolean;
  removeDiacritics ?: boolean;
  hideDividers ?: boolean;
  hideGroups ?: boolean;
  init ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onSearchbarSearch ?: (searchbar?: Searchbar.Searchbar, query?: any, previousQuery?: any) => void;
  onSearchbarClear ?: (searchbar?: Searchbar.Searchbar, previousQuery?: any) => void;
  onSearchbarEnable ?: (searchbar?: Searchbar.Searchbar) => void;
  onSearchbarDisable ?: (searchbar?: Searchbar.Searchbar) => void;
  onChange ?: (event?: any) => void;
  onInput ?: (event?: any) => void;
  onFocus ?: (event?: any) => void;
  onBlur ?: (event?: any) => void;
  onSubmit ?: (event?: any) => void;
  onClickClear ?: (event?: any) => void;
  onClickDisable ?: (event?: any) => void;
}



class Searchbar extends SvelteComponentTyped<
  SearchbarProps,
  { change: CustomEvent<void>; input: CustomEvent<void>; focus: CustomEvent<void>; blur: CustomEvent<void>; submit: CustomEvent<void>; searchbarSearch: CustomEvent<void>; searchbarClear: CustomEvent<void>; searchbarEnable: CustomEvent<void>; searchbarDisable: CustomEvent<void>; },
  {  'before-inner' : {};  'inner-start' : {};  'input-wrap-start' : {};  'input-wrap-end' : {};  'inner-end' : {};  'default' : {};  'after-inner' : {}; }
> {}

export default Searchbar;