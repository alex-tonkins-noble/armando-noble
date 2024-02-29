import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Edit() {
	// Define the inner block props
	const innerBlocksPropsExtras = {
		allowedBlocks: ["np/header-logo"],
		orientation: "horizontal",
	};

	// Add any additional props to the top-level Block Props here.
	const additionalWrapperProps = {};

	// Define the block props to merge in with the inner block props
	const blockProps = useBlockProps(additionalWrapperProps);

	// Split out the child elements and the inner block props for a more efficient structure in the admin
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		blockProps,
		innerBlocksPropsExtras
	);

	return <div {...innerBlocksProps}>{children}</div>;
}
