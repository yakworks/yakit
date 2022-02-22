/* actions-label.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	assign,
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
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";

function create_fragment(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let div_levels = [{ class: /*classes*/ ctx[0] }, restProps(/*$$restProps*/ ctx[2])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onClick*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 1) && { class: /*classes*/ ctx[0] },
				dirty & /*$$restProps*/ 4 && restProps(/*$$restProps*/ ctx[2])
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
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","bold"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { bold = false } = $$props;

	function onClick() {
		emit("click");
	}

	$$self.$$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(3, className = $$new_props.class);
		if ("bold" in $$new_props) $$invalidate(4, bold = $$new_props.bold);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(0, classes = classNames(className, "actions-label", { "actions-button-bold": bold }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [classes, onClick, $$restProps, className, bold, $$scope, slots];
}

class Actions_label extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { class: 3, bold: 4 });
	}
}

export default Actions_label;