import { addFilter } from "@wordpress/hooks";
import { modifyBlockSettings } from "./functions/modifyBlockSettings";

// The layout blocks that need settings removed.
const blocksToModify = ["core/group", "core/columns", "core/column"];

addFilter(
	"blocks.registerBlockType",
	"np/multiple_block_settings_modifications",
	(settings) => modifyBlockSettings(settings, blocksToModify)
);
