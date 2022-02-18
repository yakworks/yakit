/* nav-title.svelte generated by Svelte v3.38.2 */
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
	safe_not_equal,
	set_attributes,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { colorClasses } from "../shared/mixins";
import { classNames, plainText } from "../shared/utils";
import { restProps } from "../shared/rest-props";

function create_if_block_1(ctx) {
	let t_value = plainText(/*title*/ ctx[0]) + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*title*/ 1 && t_value !== (t_value = plainText(/*title*/ ctx[0]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (25:2) {#if typeof subtitle !== 'undefined'}
function create_if_block(ctx) {
	let span;
	let t_value = plainText(/*subtitle*/ ctx[1]) + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			attr(span, "class", "subtitle");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*subtitle*/ 2 && t_value !== (t_value = plainText(/*subtitle*/ ctx[1]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let t1;
	let current;
	let if_block0 = typeof /*title*/ ctx[0] !== "undefined" && create_if_block_1(ctx);
	let if_block1 = typeof /*subtitle*/ ctx[1] !== "undefined" && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let div_levels = [{ class: /*classes*/ ctx[2] }, restProps(/*$$restProps*/ ctx[3])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (default_slot) default_slot.c();
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append(div, t0);
			if (if_block1) if_block1.m(div, null);
			append(div, t1);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (typeof /*title*/ ctx[0] !== "undefined") {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (typeof /*subtitle*/ ctx[1] !== "undefined") {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 4) && { class: /*classes*/ ctx[2] },
				dirty & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
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
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","title","subtitle","sliding"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { title = undefined } = $$props;
	let { subtitle = undefined } = $$props;
	let { sliding = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ("title" in $$new_props) $$invalidate(0, title = $$new_props.title);
		if ("subtitle" in $$new_props) $$invalidate(1, subtitle = $$new_props.subtitle);
		if ("sliding" in $$new_props) $$invalidate(5, sliding = $$new_props.sliding);
		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(2, classes = classNames(className, "title", { sliding }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [title, subtitle, classes, $$restProps, className, sliding, $$scope, slots];
}

class Nav_title extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			class: 4,
			title: 0,
			subtitle: 1,
			sliding: 5
		});
	}
}

export default Nav_title;