
import { SvelteComponentTyped } from 'svelte';


interface AreaChartProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  lineChart?: boolean;
  datasets?: {values: number[]; color?: string; label?: any}[];
  axis?: boolean;
  axisLabels?: any[];
  tooltip?: boolean;
  legend?: boolean;
  toggleDatasets?: boolean;
  width?: number;
  height?: number;
  maxAxisLabels?: number;
  formatAxisLabel?: (label: any) => string;
  formatLegendLabel?: (label: any) => string;
  formatTooltip?: (data: {index: number; total: number; datasets: {label: any; color: string; value: number}[]}) => string;
  formatTooltipAxisLabel?: (label: any) => string;
  formatTooltipTotal?: (total: number) => string;
  formatTooltipDataset?: (label: any, value: number, color: string) => string;
  onSelect ?: (index: number | null) => void;
}



class AreaChart extends SvelteComponentTyped<
  AreaChartProps,
  { select: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export default AreaChart;