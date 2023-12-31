<?php
/**
 * Register Block Pattern Category.
 *
 * @package Armando Noble
 * @since 2.0.0
 */

if ( function_exists( 'register_block_pattern_category' ) ) {
	register_block_pattern_category(
		'elements',
		array( 'label' => esc_html__( 'Design elements', 'armando-noble' ) )
	);
}

if ( function_exists( 'register_block_pattern_category' ) ) {
	register_block_pattern_category(
		'blog',
		array( 'label' => esc_html__( 'Blog / post list', 'armando-noble' ) )
	);
}

if ( function_exists( 'register_block_pattern_category' ) ) {
	register_block_pattern_category(
		'layout',
		array( 'label' => esc_html__( 'Page layouts', 'armando-noble' ) )
	);
}

if ( function_exists( 'register_block_pattern_category' ) ) {
	register_block_pattern_category(
		'sport',
		array( 'label' => esc_html__( 'Sport', 'armando-noble' ) )
	);
}
