import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import classNames from "classnames";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		contentSize,
		addSectionTitle,
		sectionTitleContent,
		sectionTitleHtmlTag,
	} = attributes;

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

	const sizes = [
		{ label: __("Small", "np-section"), value: "small" },
		{ label: __("Regular", "np-section"), value: "regular" },
		{ label: __("Wide", "np-section"), value: "wide" },
		{ label: __("Full", "np-section"), value: "full" },
	];

	const availableHeadingTags = [
		{ label: __("H1", "np-section"), value: "h1" },
		{ label: __("H2", "np-section"), value: "h2" },
		{ label: __("H3", "np-section"), value: "h3" },
		{ label: __("H4", "np-section"), value: "h4" },
		{ label: __("H5", "np-section"), value: "h5" },
		{ label: __("H6", "np-section"), value: "h6" },
		{ label: __("Paragraph", "np-section"), value: "p" },
	];

	// Define the section widths that are not available for use if the section title is enabled.
	// Section content will clash with the section title if it is any wider than the regular content width.
	const disallowedSectionTitleSizes = ["wide", "full"];

	const handleContentSizeChange = (val) => {
		setAttributes({ contentSize: val });

		// Set addSectionTitle to false if the content size is above the regular content width.
		if (disallowedSectionTitleSizes.includes(val)) {
			setAttributes({ addSectionTitle: false });
		}
	};

	const handleAddSectionTitleToggle = (val) => {
		setAttributes({ addSectionTitle: val });

		// If addSectionTitle is enabled and the current content width is not wide or full, then reset contentSize to "regular".
		if (val && disallowedSectionTitleSizes.includes(contentSize)) {
			setAttributes({ contentSize: "regular" });
		}
	};

	const handleAddSectionTitleTagChange = (val) => {
		setAttributes({ sectionTitleHtmlTag: val });
	};

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

					<ToggleControl
						label={__("Add Section Title", "np-section")}
						checked={addSectionTitle}
						onChange={handleAddSectionTitleToggle}
					/>

					{addSectionTitle && (
						<SelectControl
							label={__("Section Title HTML Tag", "np-section")}
							help={__(
								"Change the Tag / Heading Level of the Section Title here - beneficial for SEO.",
								"np-section"
							)}
							value={sectionTitleHtmlTag}
							options={
								availableHeadingTags &&
								availableHeadingTags.map((tag) => ({
									label: tag.label,
									value: tag.value,
								}))
							}
							onChange={handleAddSectionTitleTagChange}
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}>
				{addSectionTitle && (
					<div className="vertical-content">
						<RichText
							tagName={sectionTitleHtmlTag}
							value={sectionTitleContent}
							onChange={(newTitle) =>
								setAttributes({ sectionTitleContent: newTitle })
							}
							placeholder={__("Enter Section Title", "np-section")}
							allowedFormats={[]}
						/>
					</div>
				)}
				<div className={containerClasses}>{children}</div>
			</div>
		</>
	);
}
