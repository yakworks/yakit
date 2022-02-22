
import { SvelteComponentTyped } from 'svelte';


interface PieChartProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  size?: number;
  tooltip?: boolean;
  datasets?: {value: number; color?: string; label?: string}[];
  formatTooltip?: (data: {index: number; value: number; label: string; color: string; percentage: number}) => void;
  onSelect ?: (index: number | null, item: {value: number; label: string; color: string}) => void;
}



class PieChart extends SvelteComponentTyped<
  PieChartProps,
  { select: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default PieChart;