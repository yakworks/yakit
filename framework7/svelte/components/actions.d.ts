
import { SvelteComponentTyped } from 'svelte';

import { Actions } from 'framework7/types';


interface ActionsProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  opened ?: boolean;
  animate ?: boolean;
  grid ?: boolean;
  convertToPopover ?: boolean;
  forceToPopover ?: boolean;
  target ?: string | object;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeByOutsideClick ?: boolean;
  closeOnEscape ?: boolean;
  onActionsOpen ?: (instance?: Actions.Actions) => void;
  onActionsOpened ?: (instance?: Actions.Actions) => void;
  onActionsClose ?: (instance?: Actions.Actions) => void;
  onActionsClosed ?: (instance?: Actions.Actions) => void;
  containerEl ?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
}



class Actions extends SvelteComponentTyped<
  ActionsProps,
  { actionsOpen: CustomEvent<void>; actionsOpened: CustomEvent<void>; actionsClose: CustomEvent<void>; actionsClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Actions;