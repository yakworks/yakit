/* swipeout-actions.svelte generated by Svelte v3.38.2 */
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
	safe_not_equal,
	set_attributes,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { colorClasses } from "../shared/mixins";
import { classNames } from "../shared/utils";
import { restProps } from "../shared/rest-props";

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);
	let div_levels = [{ class: /*classes*/ ctx[0] }, restProps(/*$$restProps*/ ctx[1])];
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
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 1) && { class: /*classes*/ ctx[0] },
				dirty & /*$$restProps*/ 2 && restProps(/*$$restProps*/ ctx[1])
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
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	let sideComputed;
	const omit_props_names = ["class","left","right","side"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { left = undefined } = $$props;
	let { right = undefined } = $$props;
	let { side = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("left" in $$new_props) $$invalidate(3, left = $$new_props.left);
		if ("right" in $$new_props) $$invalidate(4, right = $$new_props.right);
		if ("side" in $$new_props) $$invalidate(5, side = $$new_props.side);
		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*side, left, right*/ 56) {
			// eslint-disable-next-line
			$: $$invalidate(6, sideComputed = side || (left ? "left" : right ? "right" : "left"));
		}

		$: $$invalidate(0, classes = classNames(className, `swipeout-actions-${sideComputed}`, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		$$restProps,
		className,
		left,
		right,
		side,
		sideComputed,
		$$scope,
		slots
	];
}

class Swipeout_actions extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { class: 2, left: 3, right: 4, side: 5 });
	}
}

export default Swipeout_actions;