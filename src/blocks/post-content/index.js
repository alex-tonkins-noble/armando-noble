import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

registerBlockType(metadata, {
	edit: () => null,
	save: () => null,
});
