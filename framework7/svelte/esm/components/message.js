/* message.svelte generated by Svelte v3.38.2 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	compute_rest_props,
	compute_slots,
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
	run_all,
	safe_not_equal,
	set_attributes,
	set_data,
	space,
	text as text_1,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher } from "svelte";
import { colorClasses } from "../shared/mixins";
import { classNames, plainText, createEmitter } from "../shared/utils";
import { restProps } from "../shared/rest-props";
const get_end_slot_changes = dirty => ({});
const get_end_slot_context = ctx => ({});
const get_content_end_slot_changes = dirty => ({});
const get_content_end_slot_context = ctx => ({});
const get_footer_slot_changes = dirty => ({});
const get_footer_slot_context = ctx => ({});
const get_bubble_end_slot_changes = dirty => ({});
const get_bubble_end_slot_context = ctx => ({});
const get_text_footer_slot_changes = dirty => ({});
const get_text_footer_slot_context = ctx => ({});
const get_text_slot_changes = dirty => ({});
const get_text_slot_context = ctx => ({});
const get_text_header_slot_changes = dirty => ({});
const get_text_header_slot_context = ctx => ({});
const get_image_slot_changes = dirty => ({});
const get_image_slot_context = ctx => ({});
const get_bubble_start_slot_changes = dirty => ({});
const get_bubble_start_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});
const get_name_slot_changes = dirty => ({});
const get_name_slot_context = ctx => ({});
const get_content_start_slot_changes = dirty => ({});
const get_content_start_slot_context = ctx => ({});
const get_avatar_slot_changes = dirty => ({});
const get_avatar_slot_context = ctx => ({});
const get_start_slot_changes = dirty => ({});
const get_start_slot_context = ctx => ({});

// (91:2) {#if avatar || hasAvatarSlots}
function create_if_block_10(ctx) {
	let div;
	let div_style_value;
	let current;
	let mounted;
	let dispose;
	const avatar_slot_template = /*#slots*/ ctx[37].avatar;
	const avatar_slot = create_slot(avatar_slot_template, ctx, /*$$scope*/ ctx[36], get_avatar_slot_context);

	return {
		c() {
			div = element("div");
			if (avatar_slot) avatar_slot.c();
			attr(div, "class", "message-avatar");

			attr(div, "style", div_style_value = /*avatar*/ ctx[3]
			? `background-image: url(${/*avatar*/ ctx[3]})`
			: undefined);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (avatar_slot) {
				avatar_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onAvatarClick*/ ctx[22]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (avatar_slot) {
				if (avatar_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(avatar_slot, avatar_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_avatar_slot_changes, get_avatar_slot_context);
				}
			}

			if (!current || dirty[0] & /*avatar*/ 8 && div_style_value !== (div_style_value = /*avatar*/ ctx[3]
			? `background-image: url(${/*avatar*/ ctx[3]})`
			: undefined)) {
				attr(div, "style", div_style_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(avatar_slot, local);
			current = true;
		},
		o(local) {
			transition_out(avatar_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (avatar_slot) avatar_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (102:4) {#if hasNameSlots || name}
function create_if_block_9(ctx) {
	let div;
	let t0_value = plainText(/*name*/ ctx[2]) + "";
	let t0;
	let t1;
	let current;
	let mounted;
	let dispose;
	const name_slot_template = /*#slots*/ ctx[37].name;
	const name_slot = create_slot(name_slot_template, ctx, /*$$scope*/ ctx[36], get_name_slot_context);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (name_slot) name_slot.c();
			attr(div, "class", "message-name");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);

			if (name_slot) {
				name_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onNameClick*/ ctx[20]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*name*/ 4) && t0_value !== (t0_value = plainText(/*name*/ ctx[2]) + "")) set_data(t0, t0_value);

			if (name_slot) {
				if (name_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(name_slot, name_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_name_slot_changes, get_name_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(name_slot, local);
			current = true;
		},
		o(local) {
			transition_out(name_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (name_slot) name_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (108:4) {#if hasHeaderSlots || header}
function create_if_block_8(ctx) {
	let div;
	let t0_value = plainText(/*header*/ ctx[5]) + "";
	let t0;
	let t1;
	let current;
	let mounted;
	let dispose;
	const header_slot_template = /*#slots*/ ctx[37].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[36], get_header_slot_context);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (header_slot) header_slot.c();
			attr(div, "class", "message-header");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);

			if (header_slot) {
				header_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onHeaderClick*/ ctx[23]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*header*/ 32) && t0_value !== (t0_value = plainText(/*header*/ ctx[5]) + "")) set_data(t0, t0_value);

			if (header_slot) {
				if (header_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(header_slot, header_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_header_slot_changes, get_header_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(header_slot, local);
			current = true;
		},
		o(local) {
			transition_out(header_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (header_slot) header_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (116:6) {#if hasImageSlots || image}
function create_if_block_6(ctx) {
	let div;
	let t;
	let current;
	let if_block = /*image*/ ctx[4] && create_if_block_7(ctx);
	const image_slot_template = /*#slots*/ ctx[37].image;
	const image_slot = create_slot(image_slot_template, ctx, /*$$scope*/ ctx[36], get_image_slot_context);

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			if (image_slot) image_slot.c();
			attr(div, "class", "message-image");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append(div, t);

			if (image_slot) {
				image_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (/*image*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_7(ctx);
					if_block.c();
					if_block.m(div, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (image_slot) {
				if (image_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(image_slot, image_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_image_slot_changes, get_image_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(image_slot, local);
			current = true;
		},
		o(local) {
			transition_out(image_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			if (image_slot) image_slot.d(detaching);
		}
	};
}

// (118:10) {#if image}
function create_if_block_7(ctx) {
	let img;
	let img_src_value;

	return {
		c() {
			img = element("img");
			if (img.src !== (img_src_value = /*image*/ ctx[4])) attr(img, "src", img_src_value);
		},
		m(target, anchor) {
			insert(target, img, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*image*/ 16 && img.src !== (img_src_value = /*image*/ ctx[4])) {
				attr(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) detach(img);
		}
	};
}

// (124:6) {#if hasTextHeaderSlots || textHeader}
function create_if_block_5(ctx) {
	let div;
	let t0_value = plainText(/*textHeader*/ ctx[7]) + "";
	let t0;
	let t1;
	let current;
	const text_header_slot_template = /*#slots*/ ctx[37]["text-header"];
	const text_header_slot = create_slot(text_header_slot_template, ctx, /*$$scope*/ ctx[36], get_text_header_slot_context);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (text_header_slot) text_header_slot.c();
			attr(div, "class", "message-text-header");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);

			if (text_header_slot) {
				text_header_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*textHeader*/ 128) && t0_value !== (t0_value = plainText(/*textHeader*/ ctx[7]) + "")) set_data(t0, t0_value);

			if (text_header_slot) {
				if (text_header_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(text_header_slot, text_header_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_text_header_slot_changes, get_text_header_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(text_header_slot, local);
			current = true;
		},
		o(local) {
			transition_out(text_header_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (text_header_slot) text_header_slot.d(detaching);
		}
	};
}

// (130:6) {#if hasTextSlots || text || htmlText || typing}
function create_if_block_2(ctx) {
	let div;
	let t0_value = plainText(/*text*/ ctx[0]) + "";
	let t0;
	let t1;
	let t2;
	let t3;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*htmlText*/ ctx[1] && create_if_block_4(ctx);
	const text_slot_template = /*#slots*/ ctx[37].text;
	const text_slot = create_slot(text_slot_template, ctx, /*$$scope*/ ctx[36], get_text_slot_context);
	let if_block1 = /*typing*/ ctx[9] && create_if_block_3(ctx);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (text_slot) text_slot.c();
			t3 = space();
			if (if_block1) if_block1.c();
			attr(div, "class", "message-text");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);
			if (if_block0) if_block0.m(div, null);
			append(div, t2);

			if (text_slot) {
				text_slot.m(div, null);
			}

			append(div, t3);
			if (if_block1) if_block1.m(div, null);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onTextClick*/ ctx[21]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*text*/ 1) && t0_value !== (t0_value = plainText(/*text*/ ctx[0]) + "")) set_data(t0, t0_value);

			if (/*htmlText*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.m(div, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (text_slot) {
				if (text_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(text_slot, text_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_text_slot_changes, get_text_slot_context);
				}
			}

			if (/*typing*/ ctx[9]) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(text_slot, local);
			current = true;
		},
		o(local) {
			transition_out(text_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (text_slot) text_slot.d(detaching);
			if (if_block1) if_block1.d();
			mounted = false;
			dispose();
		}
	};
}

// (133:10) {#if htmlText}
function create_if_block_4(ctx) {
	let html_tag;
	let html_anchor;

	return {
		c() {
			html_anchor = empty();
			html_tag = new HtmlTag(html_anchor);
		},
		m(target, anchor) {
			html_tag.m(/*htmlText*/ ctx[1], target, anchor);
			insert(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*htmlText*/ 2) html_tag.p(/*htmlText*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (135:10) {#if typing}
function create_if_block_3(ctx) {
	let div3;

	return {
		c() {
			div3 = element("div");

			div3.innerHTML = `<div></div> 
              <div></div> 
              <div></div>`;

			attr(div3, "class", "message-typing-indicator");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
		},
		d(detaching) {
			if (detaching) detach(div3);
		}
	};
}

// (144:6) {#if hasTextFooterSlots || textFooter}
function create_if_block_1(ctx) {
	let div;
	let t0_value = plainText(/*textFooter*/ ctx[8]) + "";
	let t0;
	let t1;
	let current;
	const text_footer_slot_template = /*#slots*/ ctx[37]["text-footer"];
	const text_footer_slot = create_slot(text_footer_slot_template, ctx, /*$$scope*/ ctx[36], get_text_footer_slot_context);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (text_footer_slot) text_footer_slot.c();
			attr(div, "class", "message-text-footer");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);

			if (text_footer_slot) {
				text_footer_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*textFooter*/ 256) && t0_value !== (t0_value = plainText(/*textFooter*/ ctx[8]) + "")) set_data(t0, t0_value);

			if (text_footer_slot) {
				if (text_footer_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(text_footer_slot, text_footer_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_text_footer_slot_changes, get_text_footer_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(text_footer_slot, local);
			current = true;
		},
		o(local) {
			transition_out(text_footer_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (text_footer_slot) text_footer_slot.d(detaching);
		}
	};
}

// (153:4) {#if hasFooterSlots || footer}
function create_if_block(ctx) {
	let div;
	let t0_value = plainText(/*footer*/ ctx[6]) + "";
	let t0;
	let t1;
	let current;
	let mounted;
	let dispose;
	const footer_slot_template = /*#slots*/ ctx[37].footer;
	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[36], get_footer_slot_context);

	return {
		c() {
			div = element("div");
			t0 = text_1(t0_value);
			t1 = space();
			if (footer_slot) footer_slot.c();
			attr(div, "class", "message-footer");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);

			if (footer_slot) {
				footer_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onFooterClick*/ ctx[24]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*footer*/ 64) && t0_value !== (t0_value = plainText(/*footer*/ ctx[6]) + "")) set_data(t0, t0_value);

			if (footer_slot) {
				if (footer_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_footer_slot_changes, get_footer_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(footer_slot, local);
			current = true;
		},
		o(local) {
			transition_out(footer_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (footer_slot) footer_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let t0;
	let t1;
	let div1;
	let t2;
	let t3;
	let t4;
	let div0;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	let t10;
	let t11;
	let t12;
	let t13;
	let current;
	let mounted;
	let dispose;
	const start_slot_template = /*#slots*/ ctx[37].start;
	const start_slot = create_slot(start_slot_template, ctx, /*$$scope*/ ctx[36], get_start_slot_context);
	let if_block0 = (/*avatar*/ ctx[3] || /*hasAvatarSlots*/ ctx[11]) && create_if_block_10(ctx);
	const content_start_slot_template = /*#slots*/ ctx[37]["content-start"];
	const content_start_slot = create_slot(content_start_slot_template, ctx, /*$$scope*/ ctx[36], get_content_start_slot_context);
	let if_block1 = (/*hasNameSlots*/ ctx[12] || /*name*/ ctx[2]) && create_if_block_9(ctx);
	let if_block2 = (/*hasHeaderSlots*/ ctx[13] || /*header*/ ctx[5]) && create_if_block_8(ctx);
	const bubble_start_slot_template = /*#slots*/ ctx[37]["bubble-start"];
	const bubble_start_slot = create_slot(bubble_start_slot_template, ctx, /*$$scope*/ ctx[36], get_bubble_start_slot_context);
	let if_block3 = (/*hasImageSlots*/ ctx[14] || /*image*/ ctx[4]) && create_if_block_6(ctx);
	let if_block4 = (/*hasTextHeaderSlots*/ ctx[15] || /*textHeader*/ ctx[7]) && create_if_block_5(ctx);
	let if_block5 = (/*hasTextSlots*/ ctx[17] || /*text*/ ctx[0] || /*htmlText*/ ctx[1] || /*typing*/ ctx[9]) && create_if_block_2(ctx);
	let if_block6 = (/*hasTextFooterSlots*/ ctx[16] || /*textFooter*/ ctx[8]) && create_if_block_1(ctx);
	const bubble_end_slot_template = /*#slots*/ ctx[37]["bubble-end"];
	const bubble_end_slot = create_slot(bubble_end_slot_template, ctx, /*$$scope*/ ctx[36], get_bubble_end_slot_context);
	const default_slot_template = /*#slots*/ ctx[37].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[36], null);
	let if_block7 = (/*hasFooterSlots*/ ctx[18] || /*footer*/ ctx[6]) && create_if_block(ctx);
	const content_end_slot_template = /*#slots*/ ctx[37]["content-end"];
	const content_end_slot = create_slot(content_end_slot_template, ctx, /*$$scope*/ ctx[36], get_content_end_slot_context);
	const end_slot_template = /*#slots*/ ctx[37].end;
	const end_slot = create_slot(end_slot_template, ctx, /*$$scope*/ ctx[36], get_end_slot_context);
	let div2_levels = [{ class: /*classes*/ ctx[10] }, restProps(/*$$restProps*/ ctx[26])];
	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element("div");
			if (start_slot) start_slot.c();
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			div1 = element("div");
			if (content_start_slot) content_start_slot.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if (if_block2) if_block2.c();
			t4 = space();
			div0 = element("div");
			if (bubble_start_slot) bubble_start_slot.c();
			t5 = space();
			if (if_block3) if_block3.c();
			t6 = space();
			if (if_block4) if_block4.c();
			t7 = space();
			if (if_block5) if_block5.c();
			t8 = space();
			if (if_block6) if_block6.c();
			t9 = space();
			if (bubble_end_slot) bubble_end_slot.c();
			t10 = space();
			if (default_slot) default_slot.c();
			t11 = space();
			if (if_block7) if_block7.c();
			t12 = space();
			if (content_end_slot) content_end_slot.c();
			t13 = space();
			if (end_slot) end_slot.c();
			attr(div0, "class", "message-bubble");
			attr(div1, "class", "message-content");
			set_attributes(div2, div2_data);
		},
		m(target, anchor) {
			insert(target, div2, anchor);

			if (start_slot) {
				start_slot.m(div2, null);
			}

			append(div2, t0);
			if (if_block0) if_block0.m(div2, null);
			append(div2, t1);
			append(div2, div1);

			if (content_start_slot) {
				content_start_slot.m(div1, null);
			}

			append(div1, t2);
			if (if_block1) if_block1.m(div1, null);
			append(div1, t3);
			if (if_block2) if_block2.m(div1, null);
			append(div1, t4);
			append(div1, div0);

			if (bubble_start_slot) {
				bubble_start_slot.m(div0, null);
			}

			append(div0, t5);
			if (if_block3) if_block3.m(div0, null);
			append(div0, t6);
			if (if_block4) if_block4.m(div0, null);
			append(div0, t7);
			if (if_block5) if_block5.m(div0, null);
			append(div0, t8);
			if (if_block6) if_block6.m(div0, null);
			append(div0, t9);

			if (bubble_end_slot) {
				bubble_end_slot.m(div0, null);
			}

			append(div0, t10);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append(div1, t11);
			if (if_block7) if_block7.m(div1, null);
			append(div1, t12);

			if (content_end_slot) {
				content_end_slot.m(div1, null);
			}

			append(div2, t13);

			if (end_slot) {
				end_slot.m(div2, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(div0, "click", /*onBubbleClick*/ ctx[25]),
					listen(div2, "click", /*onClick*/ ctx[19])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (start_slot) {
				if (start_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(start_slot, start_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_start_slot_changes, get_start_slot_context);
				}
			}

			if (/*avatar*/ ctx[3] || /*hasAvatarSlots*/ ctx[11]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*avatar, hasAvatarSlots*/ 2056) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_10(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div2, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (content_start_slot) {
				if (content_start_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(content_start_slot, content_start_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_content_start_slot_changes, get_content_start_slot_context);
				}
			}

			if (/*hasNameSlots*/ ctx[12] || /*name*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*hasNameSlots, name*/ 4100) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_9(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, t3);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*hasHeaderSlots*/ ctx[13] || /*header*/ ctx[5]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*hasHeaderSlots, header*/ 8224) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_8(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div1, t4);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (bubble_start_slot) {
				if (bubble_start_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(bubble_start_slot, bubble_start_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_bubble_start_slot_changes, get_bubble_start_slot_context);
				}
			}

			if (/*hasImageSlots*/ ctx[14] || /*image*/ ctx[4]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*hasImageSlots, image*/ 16400) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_6(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(div0, t6);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (/*hasTextHeaderSlots*/ ctx[15] || /*textHeader*/ ctx[7]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty[0] & /*hasTextHeaderSlots, textHeader*/ 32896) {
						transition_in(if_block4, 1);
					}
				} else {
					if_block4 = create_if_block_5(ctx);
					if_block4.c();
					transition_in(if_block4, 1);
					if_block4.m(div0, t7);
				}
			} else if (if_block4) {
				group_outros();

				transition_out(if_block4, 1, 1, () => {
					if_block4 = null;
				});

				check_outros();
			}

			if (/*hasTextSlots*/ ctx[17] || /*text*/ ctx[0] || /*htmlText*/ ctx[1] || /*typing*/ ctx[9]) {
				if (if_block5) {
					if_block5.p(ctx, dirty);

					if (dirty[0] & /*hasTextSlots, text, htmlText, typing*/ 131587) {
						transition_in(if_block5, 1);
					}
				} else {
					if_block5 = create_if_block_2(ctx);
					if_block5.c();
					transition_in(if_block5, 1);
					if_block5.m(div0, t8);
				}
			} else if (if_block5) {
				group_outros();

				transition_out(if_block5, 1, 1, () => {
					if_block5 = null;
				});

				check_outros();
			}

			if (/*hasTextFooterSlots*/ ctx[16] || /*textFooter*/ ctx[8]) {
				if (if_block6) {
					if_block6.p(ctx, dirty);

					if (dirty[0] & /*hasTextFooterSlots, textFooter*/ 65792) {
						transition_in(if_block6, 1);
					}
				} else {
					if_block6 = create_if_block_1(ctx);
					if_block6.c();
					transition_in(if_block6, 1);
					if_block6.m(div0, t9);
				}
			} else if (if_block6) {
				group_outros();

				transition_out(if_block6, 1, 1, () => {
					if_block6 = null;
				});

				check_outros();
			}

			if (bubble_end_slot) {
				if (bubble_end_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(bubble_end_slot, bubble_end_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_bubble_end_slot_changes, get_bubble_end_slot_context);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[36], dirty, null, null);
				}
			}

			if (/*hasFooterSlots*/ ctx[18] || /*footer*/ ctx[6]) {
				if (if_block7) {
					if_block7.p(ctx, dirty);

					if (dirty[0] & /*hasFooterSlots, footer*/ 262208) {
						transition_in(if_block7, 1);
					}
				} else {
					if_block7 = create_if_block(ctx);
					if_block7.c();
					transition_in(if_block7, 1);
					if_block7.m(div1, t12);
				}
			} else if (if_block7) {
				group_outros();

				transition_out(if_block7, 1, 1, () => {
					if_block7 = null;
				});

				check_outros();
			}

			if (content_end_slot) {
				if (content_end_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(content_end_slot, content_end_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_content_end_slot_changes, get_content_end_slot_context);
				}
			}

			if (end_slot) {
				if (end_slot.p && (!current || dirty[1] & /*$$scope*/ 32)) {
					update_slot(end_slot, end_slot_template, ctx, /*$$scope*/ ctx[36], dirty, get_end_slot_changes, get_end_slot_context);
				}
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*classes*/ 1024) && { class: /*classes*/ ctx[10] },
				dirty[0] & /*$$restProps*/ 67108864 && restProps(/*$$restProps*/ ctx[26])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(start_slot, local);
			transition_in(if_block0);
			transition_in(content_start_slot, local);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(bubble_start_slot, local);
			transition_in(if_block3);
			transition_in(if_block4);
			transition_in(if_block5);
			transition_in(if_block6);
			transition_in(bubble_end_slot, local);
			transition_in(default_slot, local);
			transition_in(if_block7);
			transition_in(content_end_slot, local);
			transition_in(end_slot, local);
			current = true;
		},
		o(local) {
			transition_out(start_slot, local);
			transition_out(if_block0);
			transition_out(content_start_slot, local);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(bubble_start_slot, local);
			transition_out(if_block3);
			transition_out(if_block4);
			transition_out(if_block5);
			transition_out(if_block6);
			transition_out(bubble_end_slot, local);
			transition_out(default_slot, local);
			transition_out(if_block7);
			transition_out(content_end_slot, local);
			transition_out(end_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (start_slot) start_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (content_start_slot) content_start_slot.d(detaching);
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (bubble_start_slot) bubble_start_slot.d(detaching);
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			if (bubble_end_slot) bubble_end_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (if_block7) if_block7.d();
			if (content_end_slot) content_end_slot.d(detaching);
			if (end_slot) end_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let classes;
	let hasAvatarSlots;
	let hasNameSlots;
	let hasHeaderSlots;
	let hasImageSlots;
	let hasTextHeaderSlots;
	let hasTextFooterSlots;
	let hasTextSlots;
	let hasFooterSlots;

	const omit_props_names = [
		"class","text","htmlText","name","avatar","type","image","header","footer","textHeader","textFooter","first","last","tail","sameName","sameHeader","sameFooter","sameAvatar","typing"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { text = undefined } = $$props;
	let { htmlText = undefined } = $$props;
	let { name = undefined } = $$props;
	let { avatar = undefined } = $$props;
	let { type = "sent" } = $$props;
	let { image = undefined } = $$props;
	let { header = undefined } = $$props;
	let { footer = undefined } = $$props;
	let { textHeader = undefined } = $$props;
	let { textFooter = undefined } = $$props;
	let { first = undefined } = $$props;
	let { last = undefined } = $$props;
	let { tail = undefined } = $$props;
	let { sameName = undefined } = $$props;
	let { sameHeader = undefined } = $$props;
	let { sameFooter = undefined } = $$props;
	let { sameAvatar = undefined } = $$props;
	let { typing = undefined } = $$props;

	function onClick() {
		emit("click");
	}

	function onNameClick() {
		emit("clickName");
	}

	function onTextClick() {
		emit("clickText");
	}

	function onAvatarClick() {
		emit("clickAvatar");
	}

	function onHeaderClick() {
		emit("clickHeader");
	}

	function onFooterClick() {
		emit("clickFooter");
	}

	function onBubbleClick() {
		emit("clickBubble");
	}

	$$self.$$set = $$new_props => {
		$$invalidate(39, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(26, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(27, className = $$new_props.class);
		if ("text" in $$new_props) $$invalidate(0, text = $$new_props.text);
		if ("htmlText" in $$new_props) $$invalidate(1, htmlText = $$new_props.htmlText);
		if ("name" in $$new_props) $$invalidate(2, name = $$new_props.name);
		if ("avatar" in $$new_props) $$invalidate(3, avatar = $$new_props.avatar);
		if ("type" in $$new_props) $$invalidate(28, type = $$new_props.type);
		if ("image" in $$new_props) $$invalidate(4, image = $$new_props.image);
		if ("header" in $$new_props) $$invalidate(5, header = $$new_props.header);
		if ("footer" in $$new_props) $$invalidate(6, footer = $$new_props.footer);
		if ("textHeader" in $$new_props) $$invalidate(7, textHeader = $$new_props.textHeader);
		if ("textFooter" in $$new_props) $$invalidate(8, textFooter = $$new_props.textFooter);
		if ("first" in $$new_props) $$invalidate(29, first = $$new_props.first);
		if ("last" in $$new_props) $$invalidate(30, last = $$new_props.last);
		if ("tail" in $$new_props) $$invalidate(31, tail = $$new_props.tail);
		if ("sameName" in $$new_props) $$invalidate(32, sameName = $$new_props.sameName);
		if ("sameHeader" in $$new_props) $$invalidate(33, sameHeader = $$new_props.sameHeader);
		if ("sameFooter" in $$new_props) $$invalidate(34, sameFooter = $$new_props.sameFooter);
		if ("sameAvatar" in $$new_props) $$invalidate(35, sameAvatar = $$new_props.sameAvatar);
		if ("typing" in $$new_props) $$invalidate(9, typing = $$new_props.typing);
		if ("$$scope" in $$new_props) $$invalidate(36, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(10, classes = classNames(
			className,
			"message",
			{
				"message-sent": type === "sent" || !type,
				"message-received": type === "received",
				"message-typing": typing,
				"message-first": first,
				"message-last": last,
				"message-tail": tail,
				"message-same-name": sameName,
				"message-same-header": sameHeader,
				"message-same-footer": sameFooter,
				"message-same-avatar": sameAvatar
			},
			colorClasses($$props)
		));
	};

	$: $$invalidate(11, hasAvatarSlots = $$slots.avatar);
	$: $$invalidate(12, hasNameSlots = $$slots.name);
	$: $$invalidate(13, hasHeaderSlots = $$slots.header);
	$: $$invalidate(14, hasImageSlots = $$slots.image);
	$: $$invalidate(15, hasTextHeaderSlots = $$slots["text-header"]);
	$: $$invalidate(16, hasTextFooterSlots = $$slots["text-footer"]);
	$: $$invalidate(17, hasTextSlots = $$slots.text);
	$: $$invalidate(18, hasFooterSlots = $$slots.footer);
	$$props = exclude_internal_props($$props);

	return [
		text,
		htmlText,
		name,
		avatar,
		image,
		header,
		footer,
		textHeader,
		textFooter,
		typing,
		classes,
		hasAvatarSlots,
		hasNameSlots,
		hasHeaderSlots,
		hasImageSlots,
		hasTextHeaderSlots,
		hasTextFooterSlots,
		hasTextSlots,
		hasFooterSlots,
		onClick,
		onNameClick,
		onTextClick,
		onAvatarClick,
		onHeaderClick,
		onFooterClick,
		onBubbleClick,
		$$restProps,
		className,
		type,
		first,
		last,
		tail,
		sameName,
		sameHeader,
		sameFooter,
		sameAvatar,
		$$scope,
		slots
	];
}

class Message extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				class: 27,
				text: 0,
				htmlText: 1,
				name: 2,
				avatar: 3,
				type: 28,
				image: 4,
				header: 5,
				footer: 6,
				textHeader: 7,
				textFooter: 8,
				first: 29,
				last: 30,
				tail: 31,
				sameName: 32,
				sameHeader: 33,
				sameFooter: 34,
				sameAvatar: 35,
				typing: 9
			},
			[-1, -1]
		);
	}
}

export default Message;