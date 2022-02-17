
import { SvelteComponentTyped } from 'svelte';

import { Range } from 'framework7/types';


interface RangeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  init ?: boolean;
  value ?: number | Array<any> | string;
  min ?: number | string;
  max ?: number | string;
  step ?: number | string;
  label ?: boolean;
  dual ?: boolean;
  vertical ?: boolean;
  verticalReversed ?: boolean;
  draggableBar ?: boolean;
  formatLabel ?: Function;
  scale ?: boolean;
  scaleSteps ?: number;
  scaleSubSteps ?: number;
  formatScaleLabel ?: Function;
  limitKnobPosition ?: boolean;
  name ?: string;
  input ?: boolean;
  inputId ?: string;
  disabled ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onRangeChange ?: (val?: any) => void;
  onRangeChanged ?: (val?: any) => void;
}



class Range extends SvelteComponentTyped<
  RangeProps,
  { rangeChange: CustomEvent<void>; rangeChanged: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default Range;
