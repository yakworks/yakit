
import { SvelteComponentTyped } from 'svelte';


interface GaugeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  type ?: string;
  value ?: number | string;
  size ?: number | string;
  bgColor ?: string;
  borderBgColor ?: string;
  borderColor ?: string;
  borderWidth ?: number | string;
  valueText ?: number | string;
  valueTextColor ?: string;
  valueFontSize ?: number | string;
  valueFontWeight ?: number | string;
  labelText ?: string;
  labelTextColor ?: string;
  labelFontSize ?: number | string;
  labelFontWeight ?: number | string;
}



class Gauge extends SvelteComponentTyped<
  GaugeProps,
  {  },
  {  }
> {}

export default Gauge;