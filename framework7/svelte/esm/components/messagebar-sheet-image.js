/* messagebar-sheet-image.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	compute_rest_props,
	create_slot,
	detach,
	element,
	exclude_internal_props,
	get_spread_update,
	init,
	insert,
	listen,
	safe_not_equal,
	set_attributes,
	space,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";

function create_fragment(ctx) {
	let label;
	let input;
	let t0;
	let i;
	let t1;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	let label_levels = [
		{ class: /*classes*/ ctx[1] },
		{ style: /*styles*/ ctx[2] },
		restProps(/*$$restProps*/ ctx[4])
	];

	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = assign(label_data, label_levels[i]);
	}

	return {
		c() {
			label = element("label");
			input = element("input");
			t0 = space();
			i = element("i");
			t1 = space();
			if (default_slot) default_slot.c();
			attr(input, "type", "checkbox");
			input.checked = /*checked*/ ctx[0];
			attr(i, "class", "icon icon-checkbox");
			set_attributes(label, label_data);
		},
		m(target, anchor) {
			insert(target, label, anchor);
			append(label, input);
			append(label, t0);
			append(label, i);
			append(label, t1);

			if (default_slot) {
				default_slot.m(label, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(input, "change", /*onChange*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*checked*/ 1) {
				input.checked = /*checked*/ ctx[0];
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			set_attributes(label, label_data = get_spread_update(label_levels, [
				(!current || dirty & /*classes*/ 2) && { class: /*classes*/ ctx[1] },
				(!current || dirty & /*styles*/ 4) && { style: /*styles*/ ctx[2] },
				dirty & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(label);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	let styles;
	const omit_props_names = ["style","class","image","checked"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { style = undefined } = $$props;
	let { class: className = undefined } = $$props;
	let { image = undefined } = $$props;
	let { checked = false } = $$props;

	function onChange(event) {
		if (event.target.checked) emit("checked", [event]); else emit("unchecked", [event]);
		emit("change", [event]);
		$$invalidate(0, checked = event.target.checked);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("style" in $$new_props) $$invalidate(5, style = $$new_props.style);
		if ("class" in $$new_props) $$invalidate(6, className = $$new_props.class);
		if ("image" in $$new_props) $$invalidate(7, image = $$new_props.image);
		if ("checked" in $$new_props) $$invalidate(0, checked = $$new_props.checked);
		if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(1, classes = classNames(className, "messagebar-sheet-image", "checkbox", colorClasses($$props)));

		if ($$self.$$.dirty & /*image, style*/ 160) {
			$: $$invalidate(2, styles = `${image ? `background-image: url(${image});` : ""}${style || ""}`);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		checked,
		classes,
		styles,
		onChange,
		$$restProps,
		style,
		className,
		image,
		$$scope,
		slots
	];
}

class Messagebar_sheet_image extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { style: 5, class: 6, image: 7, checked: 0 });
	}
}

export default Messagebar_sheet_image;