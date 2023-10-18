<?php
/**
 * Block styles.
 *
 * @package Armando Noble
 * @since 1.0.0
 */

/**
 * Register block styles
 *
 * @return void
 */
function armando_noble_register_block_styles() {
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/columns',
		array(
			'name'  => 'armando-noble-box-shadow',
			'label' => __( 'Box shadow', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/column',
		array(
			'name'  => 'armando-noble-box-shadow',
			'label' => __( 'Box shadow', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/column',
		array(
			'name'  => 'armando-noble-column-border',
			'label' => __( 'Inner borders', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/column',
		array(
			'name'  => 'armando-noble-column-r-l-borders',
			'label' => __( 'Right and left borders', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'  => 'armando-noble-box-shadow',
			'label' => __( 'Box shadow', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'  => 'armando-noble-top-bottom-border',
			'label' => __( 'Top and bottom border', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'  => 'armando-noble-vertical-text',
			'label' => __( 'Vertical', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'  => 'armando-noble-skewed',
			'label' => __( 'Skewed', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/media-text',
		array(
			'name'  => 'armando-noble-skewed',
			'label' => __( 'Skewed', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/paragraph',
		array(
			'name'  => 'armando-noble-vertical-text',
			'label' => __( 'Vertical', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/post-title',
		array(
			'name'  => 'armando-noble-top-bottom-border',
			'label' => __( 'Top and bottom border', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/post-title',
		array(
			'name'  => 'armando-noble-vertical-text',
			'label' => __( 'Vertical', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/post-title',
		array(
			'name'  => 'armando-noble-skewed',
			'label' => __( 'Skewed', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/site-title',
		array(
			'name'  => 'armando-noble-vertical-text',
			'label' => __( 'Vertical', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/site-title',
		array(
			'name'  => 'armando-noble-top-bottom-border',
			'label' => __( 'Top and bottom border', 'armando-noble' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/template-part',
		array(
			'name'  => 'armando-noble-sticky-header',
			'label' => __( 'Sticky header', 'armando-noble' ),
		)
	);
}
add_action( 'init', 'armando_noble_register_block_styles' );
