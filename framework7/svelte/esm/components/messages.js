/* messages.svelte generated by Svelte v3.38.2 */
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
	init as init_1,
	insert,
	safe_not_equal,
	set_attributes,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, noUndefinedProps } from "../shared/utils";
import { restProps } from "../shared/rest-props";
import { app, f7ready } from "../shared/f7";
const get_default_slot_changes = dirty => ({ messages: dirty & /*f7Messages*/ 2 });
const get_default_slot_context = ctx => ({ messages: /*f7Messages*/ ctx[1] });

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[23].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], get_default_slot_context);
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

			/*div_binding*/ ctx[24](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope, f7Messages*/ 4194306)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[22], dirty, get_default_slot_changes, get_default_slot_context);
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
			/*div_binding*/ ctx[24](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","autoLayout","messages","newMessagesFirst","scrollMessages","scrollMessagesOnEdge","firstMessageRule","lastMessageRule","tailMessageRule","sameNameMessageRule","sameHeaderMessageRule","sameFooterMessageRule","sameAvatarMessageRule","customClassMessageRule","renderMessage","typing","init","instance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { autoLayout = false } = $$props;
	let { messages = [] } = $$props;
	let { newMessagesFirst = false } = $$props;
	let { scrollMessages = true } = $$props;
	let { scrollMessagesOnEdge = true } = $$props;
	let { firstMessageRule = undefined } = $$props;
	let { lastMessageRule = undefined } = $$props;
	let { tailMessageRule = undefined } = $$props;
	let { sameNameMessageRule = undefined } = $$props;
	let { sameHeaderMessageRule = undefined } = $$props;
	let { sameFooterMessageRule = undefined } = $$props;
	let { sameAvatarMessageRule = undefined } = $$props;
	let { customClassMessageRule = undefined } = $$props;
	let { renderMessage = undefined } = $$props;
	let { typing = false } = $$props;
	let { init = true } = $$props;
	let el;
	let f7Messages;
	let childrenBeforeUpdated = null;

	function instance() {
		return f7Messages;
	}

	onMount(() => {
		if (!init) return;

		f7ready(() => {
			$$invalidate(1, f7Messages = app.f7.messages.create(noUndefinedProps({
				el,
				autoLayout,
				messages,
				newMessagesFirst,
				scrollMessages,
				scrollMessagesOnEdge,
				firstMessageRule,
				lastMessageRule,
				tailMessageRule,
				sameNameMessageRule,
				sameHeaderMessageRule,
				sameFooterMessageRule,
				sameAvatarMessageRule,
				customClassMessageRule,
				renderMessage
			})));

			if (typing) f7Messages.showTyping();
		});
	});

	beforeUpdate(() => {
		if (!init || !el) return;
		const children = el.children;
		if (!children) return;
		childrenBeforeUpdated = children.length;

		for (let i = 0; i < children.length; i += 1) {
			children[i].classList.add("message-appeared");
		}
	});

	afterUpdate(() => {
		if (!init) return;
		if (!el) return;
		const children = el.children;
		if (!children) return;
		const childrenAfterUpdated = children.length;

		for (let i = 0; i < children.length; i += 1) {
			if (!children[i].classList.contains("message-appeared")) {
				children[i].classList.add("message-appear-from-bottom");
			}
		}

		if (f7Messages && f7Messages.layout && autoLayout) {
			f7Messages.layout();
		}

		if (childrenBeforeUpdated !== childrenAfterUpdated && f7Messages && f7Messages.scroll && scrollMessages) {
			f7Messages.scroll();
		}
	});

	onDestroy(() => {
		if (f7Messages && f7Messages.destroy) {
			f7Messages.destroy();
			$$invalidate(1, f7Messages = null);
		}
	});

	let initialWatched = false;

	function watchTyping(typingPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7Messages) return;
		if (typingPassed) f7Messages.showTyping(); else f7Messages.hideTyping();
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(28, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ("autoLayout" in $$new_props) $$invalidate(5, autoLayout = $$new_props.autoLayout);
		if ("messages" in $$new_props) $$invalidate(6, messages = $$new_props.messages);
		if ("newMessagesFirst" in $$new_props) $$invalidate(7, newMessagesFirst = $$new_props.newMessagesFirst);
		if ("scrollMessages" in $$new_props) $$invalidate(8, scrollMessages = $$new_props.scrollMessages);
		if ("scrollMessagesOnEdge" in $$new_props) $$invalidate(9, scrollMessagesOnEdge = $$new_props.scrollMessagesOnEdge);
		if ("firstMessageRule" in $$new_props) $$invalidate(10, firstMessageRule = $$new_props.firstMessageRule);
		if ("lastMessageRule" in $$new_props) $$invalidate(11, lastMessageRule = $$new_props.lastMessageRule);
		if ("tailMessageRule" in $$new_props) $$invalidate(12, tailMessageRule = $$new_props.tailMessageRule);
		if ("sameNameMessageRule" in $$new_props) $$invalidate(13, sameNameMessageRule = $$new_props.sameNameMessageRule);
		if ("sameHeaderMessageRule" in $$new_props) $$invalidate(14, sameHeaderMessageRule = $$new_props.sameHeaderMessageRule);
		if ("sameFooterMessageRule" in $$new_props) $$invalidate(15, sameFooterMessageRule = $$new_props.sameFooterMessageRule);
		if ("sameAvatarMessageRule" in $$new_props) $$invalidate(16, sameAvatarMessageRule = $$new_props.sameAvatarMessageRule);
		if ("customClassMessageRule" in $$new_props) $$invalidate(17, customClassMessageRule = $$new_props.customClassMessageRule);
		if ("renderMessage" in $$new_props) $$invalidate(18, renderMessage = $$new_props.renderMessage);
		if ("typing" in $$new_props) $$invalidate(19, typing = $$new_props.typing);
		if ("init" in $$new_props) $$invalidate(20, init = $$new_props.init);
		if ("$$scope" in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(2, classes = classNames(className, "messages", colorClasses($$props)));

		if ($$self.$$.dirty & /*typing*/ 524288) {
			$: watchTyping(typing);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		el,
		f7Messages,
		classes,
		$$restProps,
		className,
		autoLayout,
		messages,
		newMessagesFirst,
		scrollMessages,
		scrollMessagesOnEdge,
		firstMessageRule,
		lastMessageRule,
		tailMessageRule,
		sameNameMessageRule,
		sameHeaderMessageRule,
		sameFooterMessageRule,
		sameAvatarMessageRule,
		customClassMessageRule,
		renderMessage,
		typing,
		init,
		instance,
		$$scope,
		slots,
		div_binding
	];
}

class Messages extends SvelteComponent {
	constructor(options) {
		super();

		init_1(this, options, instance_1, create_fragment, safe_not_equal, {
			class: 4,
			autoLayout: 5,
			messages: 6,
			newMessagesFirst: 7,
			scrollMessages: 8,
			scrollMessagesOnEdge: 9,
			firstMessageRule: 10,
			lastMessageRule: 11,
			tailMessageRule: 12,
			sameNameMessageRule: 13,
			sameHeaderMessageRule: 14,
			sameFooterMessageRule: 15,
			sameAvatarMessageRule: 16,
			customClassMessageRule: 17,
			renderMessage: 18,
			typing: 19,
			init: 20,
			instance: 21
		});
	}

	get instance() {
		return this.$$.ctx[21];
	}
}

export default Messages;