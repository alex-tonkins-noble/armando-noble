import domReady from "@wordpress/dom-ready";
import { getBlockVariations } from "@wordpress/blocks";
import { unregisterBlockVariation } from "@wordpress/blocks";

const allowed_embed_variations = ["youtube", "vimeo"];

domReady(function () {
	getBlockVariations("core/embed").forEach((variation) => {
		if (!allowed_embed_variations.includes(variation.name)) {
			unregisterBlockVariation("core/embed", variation.name);
		}
	});
});
