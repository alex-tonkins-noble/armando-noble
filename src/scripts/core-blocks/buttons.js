import domReady from "@wordpress/dom-ready";
import { registerBlockStyle } from "@wordpress/blocks";
import { addFilter } from "@wordpress/hooks";

// Remove all initial Button Styles
addFilter(
	"blocks.registerBlockType",
	"ns/button_block_supports",
	(props, name) => {
		if (name == "core/button") {
			props.styles = [];
		}
		return props;
	}
);

// Add custom Button Styles
domReady(function () {
	registerBlockStyle("core/button", {
		name: "btn-primary",
		label: "Primary",
		isDefault: true,
	});

	registerBlockStyle("core/button", {
		name: "btn-secondary",
		label: "Secondary",
	});
});
