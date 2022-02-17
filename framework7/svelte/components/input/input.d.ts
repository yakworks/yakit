
import { SvelteComponentTyped } from 'svelte';

import { Calendar, ColorPicker, TextEditor } from 'framework7/types';


interface InputProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  type ?: string;
  name ?: string;
  value ?: string | number | Array<any> | Date | Object;
  defaultValue ?: string | number | Array<any>;
  inputmode ?: string;
  placeholder ?: string;
  inputId ?: string | number;
  size ?: string | number;
  accept ?: string | number;
  autocomplete ?: string;
  autocorrect ?: string;
  autocapitalize ?: string;
  spellcheck ?: string;
  autofocus ?: boolean;
  autosave ?: string;
  checked ?: boolean;
  disabled ?: boolean;
  max ?: string | number;
  min ?: string | number;
  step ?: string | number;
  maxlength ?: string | number;
  minlength ?: string | number;
  multiple ?: boolean;
  readonly ?: boolean;
  required ?: boolean;
  pattern ?: string;
  validate ?: boolean | string;
  validateOnBlur ?: boolean;
  onValidate ?: Function;
  tabindex ?: string | number;
  resizable ?: boolean;
  clearButton ?: boolean;
  noFormStoreData ?: boolean;
  noStoreData ?: boolean;
  ignoreStoreData ?: boolean;
  errorMessage ?: string;
  errorMessageForce ?: boolean;
  info ?: string;
  outline ?: boolean;
  wrap ?: boolean;
  dropdown ?: string | boolean;
  calendarParams ?: Calendar.Parameters;
  colorPickerParams ?: ColorPicker.Parameters;
  textEditorParams ?: TextEditor.Parameters;
  inputStyle ?: React.CSSProperties;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  onCalendarChange ?: (calendarValue?: any) => void;
  onColorPickerChange ?: (colorPickerValue?: any) => void;
  onTextareaResize ?: (event?: any) => void;
  onInputNotEmpty ?: (event?: any) => void;
  onInputEmpty ?: (event?: any) => void;
  onInputClear ?: (event?: any) => void;
  onInput ?: (...args: any[]) => void;
  onFocus ?: (...args: any[]) => void;
  onBlur ?: (...args: any[]) => void;
  onChange ?: (...args: any[]) => void;
  onTextEditorChange ?: (...args: any[]) => void;
}



class Input extends SvelteComponentTyped<
  InputProps,
  { textareaResize: CustomEvent<void>; inputNotEmpty: CustomEvent<void>; inputEmpty: CustomEvent<void>; inputClear: CustomEvent<void>; input: CustomEvent<void>; focus: CustomEvent<void>; blur: CustomEvent<void>; change: CustomEvent<void>; textEditorChange: CustomEvent<void>; calendarChange: CustomEvent<void>; colorpickerChange: CustomEvent<void>; },
  {  'default' : {};  'error-message' : {};  'info' : {}; }
> {}

export default Input;
