/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../../web_modules/svelte/internal/index.mjs';

import DynamicFormInput from './dynamic_form_input.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i][0];
	child_ctx[3] = list[i][1];
	child_ctx[4] = list;
	child_ctx[5] = i;
	return child_ctx;
}

// (7:4) {#each Object.entries(content.fields) as [label, field]}
function create_each_block(ctx) {
	let div;
	let label;
	let t0_value = /*label*/ ctx[2] + "";
	let t0;
	let label_for_value;
	let t1;
	let dynamicforminput;
	let updating_field;
	let t2;
	let current;

	function dynamicforminput_field_binding(value) {
		/*dynamicforminput_field_binding*/ ctx[1](value, /*label*/ ctx[2]);
	}

	let dynamicforminput_props = { label: /*label*/ ctx[2] };

	if (/*content*/ ctx[0].fields[/*label*/ ctx[2]] !== void 0) {
		dynamicforminput_props.field = /*content*/ ctx[0].fields[/*label*/ ctx[2]];
	}

	dynamicforminput = new DynamicFormInput({ props: dynamicforminput_props });
	binding_callbacks.push(() => bind(dynamicforminput, "field", dynamicforminput_field_binding));

	return {
		c() {
			div = element("div");
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			create_component(dynamicforminput.$$.fragment);
			t2 = space();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			label = claim_element(div_nodes, "LABEL", { for: true, class: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, t0_value);
			label_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			claim_component(dynamicforminput.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(label, "for", label_for_value = /*label*/ ctx[2]);
			attr(label, "class", "svelte-15qb3w8");
			attr(div, "class", "field svelte-15qb3w8");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, label);
			append(label, t0);
			append(div, t1);
			mount_component(dynamicforminput, div, null);
			append(div, t2);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if ((!current || dirty & /*content*/ 1) && t0_value !== (t0_value = /*label*/ ctx[2] + "")) set_data(t0, t0_value);

			if (!current || dirty & /*content*/ 1 && label_for_value !== (label_for_value = /*label*/ ctx[2])) {
				attr(label, "for", label_for_value);
			}

			const dynamicforminput_changes = {};
			if (dirty & /*content*/ 1) dynamicforminput_changes.label = /*label*/ ctx[2];

			if (!updating_field && dirty & /*content, Object*/ 1) {
				updating_field = true;
				dynamicforminput_changes.field = /*content*/ ctx[0].fields[/*label*/ ctx[2]];
				add_flush_callback(() => updating_field = false);
			}

			dynamicforminput.$set(dynamicforminput_changes);
		},
		i(local) {
			if (current) return;
			transition_in(dynamicforminput.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(dynamicforminput.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(dynamicforminput);
		}
	};
}

function create_fragment(ctx) {
	let form;
	let current;
	let each_value = Object.entries(/*content*/ ctx[0].fields);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			form = element("form");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(form_nodes);
			}

			form_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(form, "class", "svelte-15qb3w8");
		},
		m(target, anchor) {
			insert(target, form, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(form, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*Object, content*/ 1) {
				each_value = Object.entries(/*content*/ ctx[0].fields);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(form, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(form);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props;

	function dynamicforminput_field_binding(value, label) {
		if ($$self.$$.not_equal(content.fields[label], value)) {
			content.fields[label] = value;
			$$invalidate(0, content);
		}
	}

	$$self.$$set = $$props => {
		if ("content" in $$props) $$invalidate(0, content = $$props.content);
	};

	return [content, dynamicforminput_field_binding];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { content: 0 });
	}
}

export default Component;