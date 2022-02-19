
import { SvelteComponentTyped } from 'svelte';

import { TextEditor } from 'framework7/types';


interface TextEditorProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
  mode ?: string;
  value ?: string;
  buttons ?: Array<any>;
  customButtons ?: Object;
  dividers ?: boolean;
  imageUrlText ?: string;
  linkUrlText ?: string;
  placeholder ?: string;
  clearFormattingOnPaste ?: boolean;
  resizable ?: boolean;
  onTextEditorChange ?: (value?: any) => void;
  onTextEditorInput ?: (value?: any) => void;
  onTextEditorFocus ?: (...args: any[]) => void;
  onTextEditorBlur ?: (...args: any[]) => void;
  onTextEditorButtonClick ?: (button?: any) => void;
  onTextEditorKeyboardOpen ?: (...args: any[]) => void;
  onTextEditorKeyboardClose ?: (...args: any[]) => void;
  onTextEditorPopoverOpen ?: (...args: any[]) => void;
  onTextEditorPopoverClose ?: (...args: any[]) => void;
  onTextEditorInsertLink?: (...args: any[]) => void;
  onTextEditorInsertImage?: (...args: any[]) => void;
}



class TextEditor extends SvelteComponentTyped<
  TextEditorProps,
  { textEditorChange: CustomEvent<void>; textEditorInput: CustomEvent<void>; textEditorFocus: CustomEvent<void>; textEditorBlur: CustomEvent<void>; textEditorButtonClick: CustomEvent<void>; textEditorKeyboardOpen: CustomEvent<void>; textEditorKeyboardClose: CustomEvent<void>; textEditorPopoverOpen: CustomEvent<void>; textEditorPopoverClose: CustomEvent<void>; textEditorInsertLink: CustomEvent<void>; textEditorInsertImage: CustomEvent<void>; },
  {  'root-start' : {};  'default' : {};  'root-end' : {};  'root' : {}; }
> {}

export default TextEditor;