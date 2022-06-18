import { CSS } from "$markdown/mods.ts";
import { Handlers } from "$fresh/server.ts";

// This route responds to GET requests to /gfm.css with the GFM CSS from the
// x/gfm module (plus some minor style tweaks to make it play nice with twind).

const css = `
${CSS}

html {
	scroll-behavior: smooth;
}

ul.tree,
ul.tree ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

ul.tree ul {
	margin-left: 12px;
}

ul.tree li {
	margin: 0;
	padding: 0 8px;
	line-height: 20px;
	border-left: 1px solid rgb(100, 100, 100);
}

ul.tree li:last-child {
	border-left: none;
}

ul.tree li:before {
	position: relative;
	top: -4px;
	height: 12px;
	width: 12px;
	color: white;
	border-bottom: 1px solid rgb(100, 100, 100);
	content: "";
	display: inline-block;
	left: -4px;
}

ul.tree li:last-child:before {
	border-left: 1px solid rgb(100, 100, 100);
}

.markdown-body ul {
  list-style: disc
}

.markdown-body ol {
  list-style: numeric
}

.markdown-body img {
  display: inline;
}

.markdown-body ol {
  list-style: decimal;
}

.markdown-body ul {
  list-style: disc;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(css, {
      headers: {
        "content-type": "text/css",
      },
    });
  },
};
