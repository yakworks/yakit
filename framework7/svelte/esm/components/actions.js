/* actions.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	assign,
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
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount, onDestroy } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";
import { app, f7ready } from "../shared/f7";
import { modalStateClasses } from "../shared/modal-state-classes";
const get_default_slot_changes = dirty => ({ actions: dirty & /*f7Actions*/ 2 });
const get_default_slot_context = ctx => ({ actions: /*f7Actions*/ ctx[1] });

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[19].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], get_default_slot_context);
	let div_levels = [{ class: /*classes*/ ctx[2] }, restProps(/*$$restProps*/ ctx[3])];
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

			/*div_binding*/ ctx[20](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope, f7Actions*/ 262146)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[18], dirty, get_default_slot_changes, get_default_slot_context);
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
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[20](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","opened","animate","grid","convertToPopover","forceToPopover","target","backdrop","backdropEl","closeByBackdropClick","closeByOutsideClick","closeOnEscape","containerEl","instance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { opened = undefined } = $$props;
	let { animate = undefined } = $$props;
	let { grid = undefined } = $$props;
	let { convertToPopover = undefined } = $$props;
	let { forceToPopover = undefined } = $$props;
	let { target = undefined } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { closeByOutsideClick = undefined } = $$props;
	let { closeOnEscape = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let el;
	let f7Actions;
	const state = { isOpened: opened, isClosing: false };

	function instance() {
		return f7Actions;
	}

	function onOpen(instance) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit("actionsOpen", [instance]);
		$$invalidate(4, opened = true);
	}

	function onOpened(instance) {
		emit("actionsOpened", [instance]);
	}

	function onClose(instance) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit("actionsClose", [instance]);
	}

	function onClosed(instance) {
		Object.assign(state, { isClosing: false });
		emit("actionsClosed", [instance]);
		$$invalidate(4, opened = false);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7Actions) return;
		if (openedPassed) f7Actions.open(); else f7Actions.close();
	}

	onMount(() => {
		const params = {
			el,
			on: {
				open: onOpen,
				opened: onOpened,
				close: onClose,
				closed: onClosed
			}
		};

		if (target) params.targetEl = target;
		if (typeof convertToPopover !== "undefined") params.convertToPopover = convertToPopover;
		if (typeof forceToPopover !== "undefined") params.forceToPopover = forceToPopover;
		if (typeof backdrop !== "undefined") params.backdrop = backdrop;
		if (typeof backdropEl !== "undefined") params.backdropEl = backdropEl;
		if (typeof closeByBackdropClick !== "undefined") params.closeByBackdropClick = closeByBackdropClick;
		if (typeof closeByOutsideClick !== "undefined") params.closeByOutsideClick = closeByOutsideClick;
		if (typeof closeOnEscape !== "undefined") params.closeOnEscape = closeOnEscape;
		if (typeof animate !== "undefined") params.animate = animate;
		if (typeof containerEl !== "undefined") params.containerEl = containerEl;

		f7ready(() => {
			$$invalidate(1, f7Actions = app.f7.actions.create(params));

			if (opened) {
				f7Actions.open(false);
			}
		});
	});

	onDestroy(() => {
		if (f7Actions) f7Actions.destroy();
		$$invalidate(1, f7Actions = null);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(29, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(5, className = $$new_props.class);
		if ("opened" in $$new_props) $$invalidate(4, opened = $$new_props.opened);
		if ("animate" in $$new_props) $$invalidate(6, animate = $$new_props.animate);
		if ("grid" in $$new_props) $$invalidate(7, grid = $$new_props.grid);
		if ("convertToPopover" in $$new_props) $$invalidate(8, convertToPopover = $$new_props.convertToPopover);
		if ("forceToPopover" in $$new_props) $$invalidate(9, forceToPopover = $$new_props.forceToPopover);
		if ("target" in $$new_props) $$invalidate(10, target = $$new_props.target);
		if ("backdrop" in $$new_props) $$invalidate(11, backdrop = $$new_props.backdrop);
		if ("backdropEl" in $$new_props) $$invalidate(12, backdropEl = $$new_props.backdropEl);
		if ("closeByBackdropClick" in $$new_props) $$invalidate(13, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ("closeByOutsideClick" in $$new_props) $$invalidate(14, closeByOutsideClick = $$new_props.closeByOutsideClick);
		if ("closeOnEscape" in $$new_props) $$invalidate(15, closeOnEscape = $$new_props.closeOnEscape);
		if ("containerEl" in $$new_props) $$invalidate(16, containerEl = $$new_props.containerEl);
		if ("$$scope" in $$new_props) $$invalidate(18, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(2, classes = classNames(className, "actions-modal", { "actions-grid": grid }, modalStateClasses(state), colorClasses($$props)));

		if ($$self.$$.dirty & /*opened*/ 16) {
			$: watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		el,
		f7Actions,
		classes,
		$$restProps,
		opened,
		className,
		animate,
		grid,
		convertToPopover,
		forceToPopover,
		target,
		backdrop,
		backdropEl,
		closeByBackdropClick,
		closeByOutsideClick,
		closeOnEscape,
		containerEl,
		instance,
		$$scope,
		slots,
		div_binding
	];
}

class Actions extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance_1, create_fragment, safe_not_equal, {
			class: 5,
			opened: 4,
			animate: 6,
			grid: 7,
			convertToPopover: 8,
			forceToPopover: 9,
			target: 10,
			backdrop: 11,
			backdropEl: 12,
			closeByBackdropClick: 13,
			closeByOutsideClick: 14,
			closeOnEscape: 15,
			containerEl: 16,
			instance: 17
		});
	}

	get instance() {
		return this.$$.ctx[17];
	}
}

export default Actions;