
import { SvelteComponentTyped } from 'svelte';

import { Popover } from 'framework7/types';


interface PopoverProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  opened ?: boolean;
  animate ?: boolean;
  targetEl ?: string | object;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeByOutsideClick ?: boolean;
  closeOnEscape ?: boolean;
  containerEl ?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onPopoverOpen ?: (instance?: Popover.Popover) => void;
  onPopoverOpened ?: (instance?: Popover.Popover) => void;
  onPopoverClose ?: (instance?: Popover.Popover) => void;
  onPopoverClosed ?: (instance?: Popover.Popover) => void;
}



class Popover extends SvelteComponentTyped<
  PopoverProps,
  { popoverOpen: CustomEvent<void>; popoverOpened: CustomEvent<void>; popoverClose: CustomEvent<void>; popoverClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Popover;
