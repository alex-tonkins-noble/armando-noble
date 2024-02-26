import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import classNames from "classnames";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { contentSize } = attributes;

	const containerClasses = classNames({
		"wp-block-np-section__container": true,
		[`content--size-${contentSize}`]: contentSize,
	});

	// Define the inner block props
	const innerBlocksPropsExtras = {
		orientation: "vertical",
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

	const handleContentSizeChange = (val) => {
		setAttributes({ contentSize: val });
	};

	const sizes = [
		{ label: __("Regular", "np-section"), value: "regular" },
		{ label: __("Wide", "np-section"), value: "wide" },
		{ label: __("Full", "np-section"), value: "full" },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Options", "np-section")}>
					<SelectControl
						label={__("Content Size", "np-section")}
						help={__(
							"Change the width of the Content within the Section.",
							"np-section"
						)}
						value={contentSize}
						options={
							sizes &&
							sizes.map((size) => ({
								label: size.label,
								value: size.value,
							}))
						}
						onChange={handleContentSizeChange}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}>
				<div className="vertical-content">
					<h3>Test Vertical Title</h3>
				</div>
				<div className={containerClasses}>{children}</div>
			</div>
		</>
	);
}
