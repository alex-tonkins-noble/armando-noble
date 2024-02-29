import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	const additionalWrapperProps = {};

	return (
		<div {...useBlockProps(additionalWrapperProps)}>
			<p>
				{__(
					"This section is the Noble Content block. It will output all the blocks within a single post, page or custom post type.",
					"np-post-content"
				)}
			</p>
			<p>
				{__(
					"It can present anything from straightforward text paragraphs in a blog post to complex compositions featuring image galleries, videos, tables, columns, and various other block types.",
					"np-post-content"
				)}
			</p>
		</div>
	);
}
