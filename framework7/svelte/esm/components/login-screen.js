/* login-screen.svelte generated by Svelte v3.38.2 */
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
const get_default_slot_changes = dirty => ({ loginScreen: dirty & /*f7LoginScreen*/ 2 });
const get_default_slot_context = ctx => ({ loginScreen: /*f7LoginScreen*/ ctx[1] });

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], get_default_slot_context);
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

			/*div_binding*/ ctx[11](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope, f7LoginScreen*/ 514)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, get_default_slot_changes, get_default_slot_context);
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
			/*div_binding*/ ctx[11](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","opened","animate","containerEl","instance"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { opened = undefined } = $$props;
	let { animate = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let el;
	let f7LoginScreen;
	const state = { isOpened: opened, isClosing: false };

	function instance() {
		return f7LoginScreen;
	}

	function onOpen(instance) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit("loginscreenOpen loginScreenOpen", [instance]);
		$$invalidate(4, opened = true);
	}

	function onOpened(instance) {
		emit("loginscreenOpened loginScreenOpened", [instance]);
	}

	function onClose(instance) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit("loginscreenClose loginScreenClose", [instance]);
	}

	function onClosed(instance) {
		Object.assign(state, { isClosing: false });
		emit("loginscreenClosed loginScreenClosed", [instance]);
		$$invalidate(4, opened = false);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7LoginScreen) return;
		if (openedPassed) f7LoginScreen.open(); else f7LoginScreen.close();
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

		if (typeof animate !== "undefined") params.animate = animate;
		if (typeof containerEl !== "undefined") params.containerEl = animate;

		f7ready(() => {
			$$invalidate(1, f7LoginScreen = app.f7.loginScreen.create(params));

			if (opened) {
				f7LoginScreen.open(false);
			}
		});
	});

	onDestroy(() => {
		if (f7LoginScreen) f7LoginScreen.destroy();
		$$invalidate(1, f7LoginScreen = null);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(20, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(5, className = $$new_props.class);
		if ("opened" in $$new_props) $$invalidate(4, opened = $$new_props.opened);
		if ("animate" in $$new_props) $$invalidate(6, animate = $$new_props.animate);
		if ("containerEl" in $$new_props) $$invalidate(7, containerEl = $$new_props.containerEl);
		if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(2, classes = classNames(className, "login-screen", modalStateClasses(state), colorClasses($$props)));

		if ($$self.$$.dirty & /*opened*/ 16) {
			$: watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		el,
		f7LoginScreen,
		classes,
		$$restProps,
		opened,
		className,
		animate,
		containerEl,
		instance,
		$$scope,
		slots,
		div_binding
	];
}

class Login_screen extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance_1, create_fragment, safe_not_equal, {
			class: 5,
			opened: 4,
			animate: 6,
			containerEl: 7,
			instance: 8
		});
	}

	get instance() {
		return this.$$.ctx[8];
	}
}

export default Login_screen;