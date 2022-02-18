
import { SvelteComponentTyped } from 'svelte';


interface ChipProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  media ?: string;
  text ?: string | number;
  deleteable ?: boolean;
  mediaBgColor ?: string;
  mediaTextColor ?: string;
  outline ?: boolean;
  tooltip ?: string;
  tooltipTrigger ?: string;
  onClick ?: (event?: any) => void;
  onDelete ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconAurora?: string;
  iconColor?: string;
  iconSize?: string | number;
}



class Chip extends SvelteComponentTyped<
  ChipProps,
  { click: CustomEvent<void>; delete: CustomEvent<void>; },
  {  'media' : {};  'text' : {};  'default' : {}; }
> {}

export default Chip;
