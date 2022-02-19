/* row.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	binding_callbacks,
	check_outros,
	compute_rest_props,
	create_slot,
	detach,
	element,
	empty,
	exclude_internal_props,
	get_spread_update,
	group_outros,
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

import { createEventDispatcher, onMount, onDestroy } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";
import { app, f7ready } from "../shared/f7";

function create_if_block_2(ctx) {
	let p;
	let t;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);
	let if_block = /*resizable*/ ctx[1] && /*resizableHandler*/ ctx[2] && create_if_block_3(ctx);
	let p_levels = [{ class: /*classes*/ ctx[4] }, restProps(/*$$restProps*/ ctx[6])];
	let p_data = {};

	for (let i = 0; i < p_levels.length; i += 1) {
		p_data = assign(p_data, p_levels[i]);
	}

	return {
		c() {
			p = element("p");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			set_attributes(p, p_data);
		},
		m(target, anchor) {
			insert(target, p, anchor);

			if (default_slot) {
				default_slot.m(p, null);
			}

			append(p, t);
			if (if_block) if_block.m(p, null);
			/*p_binding*/ ctx[14](p);
			current = true;

			if (!mounted) {
				dispose = listen(p, "click", /*onClick*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			if (/*resizable*/ ctx[1] && /*resizableHandler*/ ctx[2]) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(p, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(p, p_data = get_spread_update(p_levels, [
				(!current || dirty & /*classes*/ 16) && { class: /*classes*/ ctx[4] },
				dirty & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
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
			if (detaching) detach(p);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d();
			/*p_binding*/ ctx[14](null);
			mounted = false;
			dispose();
		}
	};
}

// (53:0) {#if tag === 'div'}
function create_if_block(ctx) {
	let div;
	let t;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);
	let if_block = /*resizable*/ ctx[1] && /*resizableHandler*/ ctx[2] && create_if_block_1(ctx);
	let div_levels = [{ class: /*classes*/ ctx[4] }, restProps(/*$$restProps*/ ctx[6])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append(div, t);
			if (if_block) if_block.m(div, null);
			/*div_binding*/ ctx[13](div);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onClick*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			if (/*resizable*/ ctx[1] && /*resizableHandler*/ ctx[2]) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 16) && { class: /*classes*/ ctx[4] },
				dirty & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
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
			if (if_block) if_block.d();
			/*div_binding*/ ctx[13](null);
			mounted = false;
			dispose();
		}
	};
}

// (61:4) {#if resizable && resizableHandler}
function create_if_block_3(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			attr(span, "class", "resize-handler");
		},
		m(target, anchor) {
			insert(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (56:4) {#if resizable && resizableHandler}
function create_if_block_1(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			attr(span, "class", "resize-handler");
		},
		m(target, anchor) {
			insert(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*tag*/ ctx[0] === "div") return 0;
		if (/*tag*/ ctx[0] === "p") return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx, -1))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","noGap","tag","resizable","resizableFixed","resizableAbsolute","resizableHandler"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { noGap = false } = $$props;
	let { tag = "div" } = $$props;
	let { resizable = false } = $$props;
	let { resizableFixed = false } = $$props;
	let { resizableAbsolute = false } = $$props;
	let { resizableHandler = true } = $$props;
	let el;

	function onClick() {
		emit("click");
	}

	function onResize(targetEl) {
		if (el !== targetEl) return;
		emit("gridResize");
	}

	onMount(() => {
		f7ready(() => {
			app.f7.on("gridResize", onResize);
		});
	});

	onDestroy(() => {
		if (!app.f7) return;
		app.f7.off("gridResize", onResize);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	function p_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(17, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(7, className = $$new_props.class);
		if ("noGap" in $$new_props) $$invalidate(8, noGap = $$new_props.noGap);
		if ("tag" in $$new_props) $$invalidate(0, tag = $$new_props.tag);
		if ("resizable" in $$new_props) $$invalidate(1, resizable = $$new_props.resizable);
		if ("resizableFixed" in $$new_props) $$invalidate(9, resizableFixed = $$new_props.resizableFixed);
		if ("resizableAbsolute" in $$new_props) $$invalidate(10, resizableAbsolute = $$new_props.resizableAbsolute);
		if ("resizableHandler" in $$new_props) $$invalidate(2, resizableHandler = $$new_props.resizableHandler);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(4, classes = classNames(
			className,
			"row",
			{
				"no-gap": noGap,
				resizable,
				"resizable-fixed": resizableFixed,
				"resizable-absolute": resizableAbsolute
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		tag,
		resizable,
		resizableHandler,
		el,
		classes,
		onClick,
		$$restProps,
		className,
		noGap,
		resizableFixed,
		resizableAbsolute,
		$$scope,
		slots,
		div_binding,
		p_binding
	];
}

class Row extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			class: 7,
			noGap: 8,
			tag: 0,
			resizable: 1,
			resizableFixed: 9,
			resizableAbsolute: 10,
			resizableHandler: 2
		});
	}
}

export default Row;