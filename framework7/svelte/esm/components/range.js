/* range.svelte generated by Svelte v3.38.2 */
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
	init as init_1,
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
const get_default_slot_changes = dirty => ({ range: dirty[0] & /*f7Range*/ 16 });
const get_default_slot_context = ctx => ({ range: /*f7Range*/ ctx[4] });

// (104:2) {#if input}
function create_if_block(ctx) {
	let input_1;

	return {
		c() {
			input_1 = element("input");
			attr(input_1, "type", "range");
			attr(input_1, "name", /*name*/ ctx[0]);
			attr(input_1, "id", /*inputId*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, input_1, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*name*/ 1) {
				attr(input_1, "name", /*name*/ ctx[0]);
			}

			if (dirty[0] & /*inputId*/ 4) {
				attr(input_1, "id", /*inputId*/ ctx[2]);
			}
		},
		d(detaching) {
			if (detaching) detach(input_1);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	let if_block = /*input*/ ctx[1] && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[26], get_default_slot_context);
	let div_levels = [{ class: /*classes*/ ctx[5] }, restProps(/*$$restProps*/ ctx[6])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append(div, t);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[28](div);
			current = true;
		},
		p(ctx, dirty) {
			if (/*input*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7Range*/ 67108880)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[26], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*classes*/ 32) && { class: /*classes*/ ctx[5] },
				dirty[0] & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
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
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[28](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","init","value","min","max","step","label","dual","vertical","verticalReversed","draggableBar","formatLabel","scale","scaleSteps","scaleSubSteps","formatScaleLabel","limitKnobPosition","name","input","inputId","disabled","instance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { init = true } = $$props;
	let { value = 0 } = $$props;
	let { min = 0 } = $$props;
	let { max = 100 } = $$props;
	let { step = 1 } = $$props;
	let { label = false } = $$props;
	let { dual = false } = $$props;
	let { vertical = false } = $$props;
	let { verticalReversed = false } = $$props;
	let { draggableBar = true } = $$props;
	let { formatLabel = undefined } = $$props;
	let { scale = false } = $$props;
	let { scaleSteps = 5 } = $$props;
	let { scaleSubSteps = 0 } = $$props;
	let { formatScaleLabel = undefined } = $$props;
	let { limitKnobPosition = undefined } = $$props;
	let { name = undefined } = $$props;
	let { input = false } = $$props;
	let { inputId = undefined } = $$props;
	let { disabled = false } = $$props;
	let el;
	let f7Range;

	function instance() {
		return f7Range;
	}

	function watchValue(newValue) {
		if (!f7Range) return;
		f7Range.setValue(newValue);
	}

	onMount(() => {
		if (!init) return;

		f7ready(() => {
			$$invalidate(4, f7Range = app.f7.range.create(noUndefinedProps({
				el,
				value,
				min,
				max,
				step,
				label,
				dual,
				draggableBar,
				vertical,
				verticalReversed,
				formatLabel,
				scale,
				scaleSteps,
				scaleSubSteps,
				formatScaleLabel,
				limitKnobPosition,
				on: {
					change(range, val) {
						emit("rangeChange", [val]);
					},
					changed(range, val) {
						emit("rangeChanged", [val]);
						$$invalidate(7, value = val);
					}
				}
			})));
		});
	});

	onDestroy(() => {
		if (f7Range && f7Range.destroy) {
			f7Range.destroy();
			$$invalidate(4, f7Range = null);
		}
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(31, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(8, className = $$new_props.class);
		if ("init" in $$new_props) $$invalidate(9, init = $$new_props.init);
		if ("value" in $$new_props) $$invalidate(7, value = $$new_props.value);
		if ("min" in $$new_props) $$invalidate(10, min = $$new_props.min);
		if ("max" in $$new_props) $$invalidate(11, max = $$new_props.max);
		if ("step" in $$new_props) $$invalidate(12, step = $$new_props.step);
		if ("label" in $$new_props) $$invalidate(13, label = $$new_props.label);
		if ("dual" in $$new_props) $$invalidate(14, dual = $$new_props.dual);
		if ("vertical" in $$new_props) $$invalidate(15, vertical = $$new_props.vertical);
		if ("verticalReversed" in $$new_props) $$invalidate(16, verticalReversed = $$new_props.verticalReversed);
		if ("draggableBar" in $$new_props) $$invalidate(17, draggableBar = $$new_props.draggableBar);
		if ("formatLabel" in $$new_props) $$invalidate(18, formatLabel = $$new_props.formatLabel);
		if ("scale" in $$new_props) $$invalidate(19, scale = $$new_props.scale);
		if ("scaleSteps" in $$new_props) $$invalidate(20, scaleSteps = $$new_props.scaleSteps);
		if ("scaleSubSteps" in $$new_props) $$invalidate(21, scaleSubSteps = $$new_props.scaleSubSteps);
		if ("formatScaleLabel" in $$new_props) $$invalidate(22, formatScaleLabel = $$new_props.formatScaleLabel);
		if ("limitKnobPosition" in $$new_props) $$invalidate(23, limitKnobPosition = $$new_props.limitKnobPosition);
		if ("name" in $$new_props) $$invalidate(0, name = $$new_props.name);
		if ("input" in $$new_props) $$invalidate(1, input = $$new_props.input);
		if ("inputId" in $$new_props) $$invalidate(2, inputId = $$new_props.inputId);
		if ("disabled" in $$new_props) $$invalidate(24, disabled = $$new_props.disabled);
		if ("$$scope" in $$new_props) $$invalidate(26, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(5, classes = classNames(
			className,
			"range-slider",
			{
				"range-slider-horizontal": !vertical,
				"range-slider-vertical": vertical,
				"range-slider-vertical-reversed": vertical && verticalReversed,
				disabled
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*value*/ 128) {
			$: watchValue(value);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		name,
		input,
		inputId,
		el,
		f7Range,
		classes,
		$$restProps,
		value,
		className,
		init,
		min,
		max,
		step,
		label,
		dual,
		vertical,
		verticalReversed,
		draggableBar,
		formatLabel,
		scale,
		scaleSteps,
		scaleSubSteps,
		formatScaleLabel,
		limitKnobPosition,
		disabled,
		instance,
		$$scope,
		slots,
		div_binding
	];
}

class Range extends SvelteComponent {
	constructor(options) {
		super();

		init_1(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				class: 8,
				init: 9,
				value: 7,
				min: 10,
				max: 11,
				step: 12,
				label: 13,
				dual: 14,
				vertical: 15,
				verticalReversed: 16,
				draggableBar: 17,
				formatLabel: 18,
				scale: 19,
				scaleSteps: 20,
				scaleSubSteps: 21,
				formatScaleLabel: 22,
				limitKnobPosition: 23,
				name: 0,
				input: 1,
				inputId: 2,
				disabled: 24,
				instance: 25
			},
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[25];
	}
}

export default Range;