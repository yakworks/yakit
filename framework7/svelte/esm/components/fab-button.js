/* fab-button.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	action_destroyer,
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
	is_function,
	listen,
	run_all,
	safe_not_equal,
	set_attributes,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, plainText, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";
import { useTooltip } from "../shared/use-tooltip";

function create_if_block(ctx) {
	let span;
	let t_value = plainText(/*label*/ ctx[0]) + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			attr(span, "class", "fab-label");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*label*/ 1 && t_value !== (t_value = plainText(/*label*/ ctx[0]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment(ctx) {
	let a;
	let t;
	let useTooltip_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);
	let if_block = typeof /*label*/ ctx[0] !== "undefined" && create_if_block(ctx);

	let a_levels = [
		{ target: /*target*/ ctx[1] },
		{ class: /*classes*/ ctx[5] },
		restProps(/*$$restProps*/ ctx[7])
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	return {
		c() {
			a = element("a");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			set_attributes(a, a_data);
		},
		m(target, anchor) {
			insert(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			append(a, t);
			if (if_block) if_block.m(a, null);
			/*a_binding*/ ctx[12](a);
			current = true;

			if (!mounted) {
				dispose = [
					listen(a, "click", /*onClick*/ ctx[6]),
					action_destroyer(useTooltip_action = useTooltip.call(null, a, {
						tooltip: /*tooltip*/ ctx[2],
						tooltipTrigger: /*tooltipTrigger*/ ctx[3]
					}))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (typeof /*label*/ ctx[0] !== "undefined") {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				(!current || dirty & /*target*/ 2) && { target: /*target*/ ctx[1] },
				(!current || dirty & /*classes*/ 32) && { class: /*classes*/ ctx[5] },
				dirty & /*$$restProps*/ 128 && restProps(/*$$restProps*/ ctx[7])
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty & /*tooltip, tooltipTrigger*/ 12) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[2],
				tooltipTrigger: /*tooltipTrigger*/ ctx[3]
			});
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
			if (detaching) detach(a);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d();
			/*a_binding*/ ctx[12](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","fabClose","label","target","tooltip","tooltipTrigger"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { fabClose = false } = $$props;
	let { label = undefined } = $$props;
	let { target = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;
	let el;

	function onClick() {
		emit("click");
	}

	function a_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(4, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(8, className = $$new_props.class);
		if ("fabClose" in $$new_props) $$invalidate(9, fabClose = $$new_props.fabClose);
		if ("label" in $$new_props) $$invalidate(0, label = $$new_props.label);
		if ("target" in $$new_props) $$invalidate(1, target = $$new_props.target);
		if ("tooltip" in $$new_props) $$invalidate(2, tooltip = $$new_props.tooltip);
		if ("tooltipTrigger" in $$new_props) $$invalidate(3, tooltipTrigger = $$new_props.tooltipTrigger);
		if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(5, classes = classNames(
			className,
			{
				"fab-close": fabClose,
				"fab-label-button": label
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		label,
		target,
		tooltip,
		tooltipTrigger,
		el,
		classes,
		onClick,
		$$restProps,
		className,
		fabClose,
		$$scope,
		slots,
		a_binding
	];
}

class Fab_button extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			class: 8,
			fabClose: 9,
			label: 0,
			target: 1,
			tooltip: 2,
			tooltipTrigger: 3
		});
	}
}

export default Fab_button;