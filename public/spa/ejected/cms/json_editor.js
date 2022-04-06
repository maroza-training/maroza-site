/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	prevent_default,
	query_selector_all,
	safe_not_equal,
	space,
	text
} from '../../web_modules/svelte/internal/index.mjs';

import { onMount } from '../../web_modules/svelte/index.mjs';
import { publish } from './publish.js';

function create_if_block_2(ctx) {
	let t;

	return {
		c() {
			t = text("Sending...");
		},
		l(nodes) {
			t = claim_text(nodes, "Sending...");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (83:4) {#if failed}
function create_if_block_1(ctx) {
	let t;

	return {
		c() {
			t = text("Could not commit the changes.");
		},
		l(nodes) {
			t = claim_text(nodes, "Could not commit the changes.");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (84:4) {#if sent}
function create_if_block(ctx) {
	let t;

	return {
		c() {
			t = text("Changes committed.");
		},
		l(nodes) {
			t = claim_text(nodes, "Changes committed.");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let link;
	let t0;
	let form;
	let div;
	let t1;
	let button;
	let t2;
	let t3;
	let t4;
	let t5;
	let mounted;
	let dispose;
	let if_block0 = /*sending*/ ctx[1] && create_if_block_2(ctx);
	let if_block1 = /*failed*/ ctx[3] && create_if_block_1(ctx);
	let if_block2 = /*sent*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			link = element("link");
			t0 = space();
			form = element("form");
			div = element("div");
			t1 = space();
			button = element("button");
			t2 = text("Publish");
			t3 = space();
			if (if_block0) if_block0.c();
			t4 = space();
			if (if_block1) if_block1.c();
			t5 = space();
			if (if_block2) if_block2.c();
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1xta96n\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);
			div = claim_element(form_nodes, "DIV", { class: true });
			children(div).forEach(detach);
			t1 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true });
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Publish");
			button_nodes.forEach(detach);
			t3 = claim_space(form_nodes);
			if (if_block0) if_block0.l(form_nodes);
			t4 = claim_space(form_nodes);
			if (if_block1) if_block1.l(form_nodes);
			t5 = claim_space(form_nodes);
			if (if_block2) if_block2.l(form_nodes);
			form_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(link, "rel", "stylesheet");
			attr(link, "href", "https://unpkg.com/codemirror@5.65.1/lib/codemirror.css");
			attr(div, "class", "editor-container svelte-1qxz88b");
			attr(button, "type", "submit");
			button.disabled = /*sending*/ ctx[1];
			attr(form, "class", "svelte-1qxz88b");
		},
		m(target, anchor) {
			append(document.head, link);
			insert(target, t0, anchor);
			insert(target, form, anchor);
			append(form, div);
			/*div_binding*/ ctx[7](div);
			append(form, t1);
			append(form, button);
			append(button, t2);
			append(form, t3);
			if (if_block0) if_block0.m(form, null);
			append(form, t4);
			if (if_block1) if_block1.m(form, null);
			append(form, t5);
			if (if_block2) if_block2.m(form, null);

			if (!mounted) {
				dispose = listen(form, "submit", prevent_default(/*onSubmit*/ ctx[4]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*sending*/ 2) {
				button.disabled = /*sending*/ ctx[1];
			}

			if (/*sending*/ ctx[1]) {
				if (if_block0) {
					
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(form, t4);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*failed*/ ctx[3]) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(form, t5);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*sent*/ ctx[2]) {
				if (if_block2) {
					
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(form, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			detach(link);
			if (detaching) detach(t0);
			if (detaching) detach(form);
			/*div_binding*/ ctx[7](null);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props;
	const loaded = Promise.resolve().then(() => import("https://unpkg.com/codemirror@5.65.1/lib/codemirror.js")).then(() => import("https://unpkg.com/codemirror@5.65.1/mode/javascript/javascript.js"));
	let container;
	let editor;

	onMount(async () => {
		await loaded;
		$$invalidate(6, editor = new CodeMirror(container, { mode: "javascript" }));

		editor.on("change", () => {
			try {
				$$invalidate(5, content.fields = JSON.parse(editor.getValue()), content);
			} catch(error) {
				if (!(error instanceof SyntaxError)) {
					throw error;
				}
			}
		});
	});

	let sending = false;
	let sent = false;
	let failed = false;

	async function onSubmit() {
		const { type, filename } = content;
		const filePath = "content/" + (type != "index" ? type + "/" : "") + filename;
		$$invalidate(1, sending = true);
		$$invalidate(2, sent = false);
		$$invalidate(3, failed = false);

		try {
			await publish(filePath, JSON.stringify(content.fields, undefined, "\t"));
			$$invalidate(1, sending = false);
			$$invalidate(2, sent = true);
		} catch(error) {
			$$invalidate(1, sending = false);
			$$invalidate(3, failed = true);
			throw error;
		}
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			container = $$value;
			$$invalidate(0, container);
		});
	}

	$$self.$$set = $$props => {
		if ("content" in $$props) $$invalidate(5, content = $$props.content);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*editor, content*/ 96) {
			$: if (editor && !editor.hasFocus()) {
				editor.setValue(JSON.stringify(content.fields, undefined, 4));
			}
		}
	};

	return [container, sending, sent, failed, onSubmit, content, editor, div_binding];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { content: 5 });
	}
}

export default Component;