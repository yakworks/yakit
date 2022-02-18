/* text-editor.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	binding_callbacks,
	compute_rest_props,
	create_slot,
	detach,
	element,
	exclude_internal_props,
	get_spread_update,
	init,
	insert,
	safe_not_equal,
	set_attributes,
	space,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount, onDestroy } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, noUndefinedProps, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";
import { app, f7ready } from "../shared/f7";

const get_root_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 2
});

const get_root_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[1] });

const get_root_end_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 2
});

const get_root_end_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[1] });

const get_default_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 2
});

const get_default_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[1] });

const get_root_start_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 2
});

const get_root_start_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[1] });

function create_fragment(ctx) {
	let div1;
	let t0;
	let div0;
	let t1;
	let t2;
	let current;
	const root_start_slot_template = /*#slots*/ ctx[17]["root-start"];
	const root_start_slot = create_slot(root_start_slot_template, ctx, /*$$scope*/ ctx[16], get_root_start_slot_context);
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], get_default_slot_context);
	const root_end_slot_template = /*#slots*/ ctx[17]["root-end"];
	const root_end_slot = create_slot(root_end_slot_template, ctx, /*$$scope*/ ctx[16], get_root_end_slot_context);
	const root_slot_template = /*#slots*/ ctx[17].root;
	const root_slot = create_slot(root_slot_template, ctx, /*$$scope*/ ctx[16], get_root_slot_context);
	let div1_levels = [{ class: /*classes*/ ctx[2] }, restProps(/*$$restProps*/ ctx[3])];
	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	return {
		c() {
			div1 = element("div");
			if (root_start_slot) root_start_slot.c();
			t0 = space();
			div0 = element("div");
			if (default_slot) default_slot.c();
			t1 = space();
			if (root_end_slot) root_end_slot.c();
			t2 = space();
			if (root_slot) root_slot.c();
			attr(div0, "class", "text-editor-content");
			attr(div0, "contenteditable", "");
			set_attributes(div1, div1_data);
		},
		m(target, anchor) {
			insert(target, div1, anchor);

			if (root_start_slot) {
				root_start_slot.m(div1, null);
			}

			append(div1, t0);
			append(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append(div1, t1);

			if (root_end_slot) {
				root_end_slot.m(div1, null);
			}

			append(div1, t2);

			if (root_slot) {
				root_slot.m(div1, null);
			}

			/*div1_binding*/ ctx[18](div1);
			current = true;
		},
		p(ctx, dirty) {
			if (root_start_slot) {
				if (root_start_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 65538)) {
					update_slot(root_start_slot, root_start_slot_template, ctx, /*$$scope*/ ctx[16], dirty, get_root_start_slot_changes, get_root_start_slot_context);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 65538)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[16], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}

			if (root_end_slot) {
				if (root_end_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 65538)) {
					update_slot(root_end_slot, root_end_slot_template, ctx, /*$$scope*/ ctx[16], dirty, get_root_end_slot_changes, get_root_end_slot_context);
				}
			}

			if (root_slot) {
				if (root_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 65538)) {
					update_slot(root_slot, root_slot_template, ctx, /*$$scope*/ ctx[16], dirty, get_root_slot_changes, get_root_slot_context);
				}
			}

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*classes*/ 4) && { class: /*classes*/ ctx[2] },
				dirty[0] & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(root_start_slot, local);
			transition_in(default_slot, local);
			transition_in(root_end_slot, local);
			transition_in(root_slot, local);
			current = true;
		},
		o(local) {
			transition_out(root_start_slot, local);
			transition_out(default_slot, local);
			transition_out(root_end_slot, local);
			transition_out(root_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (root_start_slot) root_start_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (root_end_slot) root_end_slot.d(detaching);
			if (root_slot) root_slot.d(detaching);
			/*div1_binding*/ ctx[18](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","mode","value","buttons","customButtons","dividers","imageUrlText","linkUrlText","placeholder","clearFormattingOnPaste","resizable","instance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { mode = undefined } = $$props;
	let { value = undefined } = $$props;
	let { buttons = undefined } = $$props;
	let { customButtons = undefined } = $$props;
	let { dividers = undefined } = $$props;
	let { imageUrlText = undefined } = $$props;
	let { linkUrlText = undefined } = $$props;
	let { placeholder = undefined } = $$props;
	let { clearFormattingOnPaste = undefined } = $$props;
	let { resizable = false } = $$props;
	let el;
	let f7TextEditor;

	function instance() {
		return f7TextEditor;
	}

	function watchValue(newValue) {
		if (f7TextEditor) {
			f7TextEditor.setValue(newValue);
		}
	}

	function onChange(editor, editorValue) {
		emit("textEditorChange", [editorValue]);
	}

	function onInput(editor, editorValue) {
		emit("textEditorInput", [editorValue]);
	}

	function onFocus() {
		emit("textEditorFocus");
	}

	function onBlur() {
		emit("textEditorBlur");
	}

	function onButtonClick(editor, button) {
		emit("textEditorButtonClick", [button]);
	}

	function onKeyboardOpen() {
		emit("textEditorKeyboardOpen");
	}

	function onKeyboardClose() {
		emit("textEditorKeyboardClose");
	}

	function onPopoverOpen() {
		emit("textEditorPopoverOpen");
	}

	function onPopoverClose() {
		emit("textEditorPopoverClose");
	}

	const onInsertLink = (editor, url) => {
		emit("textEditorInsertLink", [url]);
	};

	const onInsertImage = (editor, url) => {
		emit("textEditorInsertImage", [url]);
	};

	onMount(() => {
		const params = noUndefinedProps({
			el,
			mode,
			value,
			buttons,
			customButtons,
			dividers,
			imageUrlText,
			linkUrlText,
			placeholder,
			clearFormattingOnPaste,
			on: {
				change: onChange,
				input: onInput,
				focus: onFocus,
				blur: onBlur,
				buttonClick: onButtonClick,
				keyboardOpen: onKeyboardOpen,
				keyboardClose: onKeyboardClose,
				popoverOpen: onPopoverOpen,
				popoverClose: onPopoverClose,
				insertLink: onInsertLink,
				insertImage: onInsertImage
			}
		});

		f7ready(() => {
			$$invalidate(1, f7TextEditor = app.f7.textEditor.create(params));
		});
	});

	onDestroy(() => {
		if (f7TextEditor && f7TextEditor.destroy) {
			f7TextEditor.destroy();
			$$invalidate(1, f7TextEditor = null);
		}
	});

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(32, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ("mode" in $$new_props) $$invalidate(5, mode = $$new_props.mode);
		if ("value" in $$new_props) $$invalidate(6, value = $$new_props.value);
		if ("buttons" in $$new_props) $$invalidate(7, buttons = $$new_props.buttons);
		if ("customButtons" in $$new_props) $$invalidate(8, customButtons = $$new_props.customButtons);
		if ("dividers" in $$new_props) $$invalidate(9, dividers = $$new_props.dividers);
		if ("imageUrlText" in $$new_props) $$invalidate(10, imageUrlText = $$new_props.imageUrlText);
		if ("linkUrlText" in $$new_props) $$invalidate(11, linkUrlText = $$new_props.linkUrlText);
		if ("placeholder" in $$new_props) $$invalidate(12, placeholder = $$new_props.placeholder);
		if ("clearFormattingOnPaste" in $$new_props) $$invalidate(13, clearFormattingOnPaste = $$new_props.clearFormattingOnPaste);
		if ("resizable" in $$new_props) $$invalidate(14, resizable = $$new_props.resizable);
		if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(2, classes = classNames(className, "text-editor", resizable && "text-editor-resizable", colorClasses($$props)));

		if ($$self.$$.dirty[0] & /*value*/ 64) {
			$: watchValue(value);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		el,
		f7TextEditor,
		classes,
		$$restProps,
		className,
		mode,
		value,
		buttons,
		customButtons,
		dividers,
		imageUrlText,
		linkUrlText,
		placeholder,
		clearFormattingOnPaste,
		resizable,
		instance,
		$$scope,
		slots,
		div1_binding
	];
}

class Text_editor extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				class: 4,
				mode: 5,
				value: 6,
				buttons: 7,
				customButtons: 8,
				dividers: 9,
				imageUrlText: 10,
				linkUrlText: 11,
				placeholder: 12,
				clearFormattingOnPaste: 13,
				resizable: 14,
				instance: 15
			},
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[15];
	}
}

export default Text_editor;