<?php

// Noble Functions Alex added 18th Oct 2023.

define('THEME_VERSION', wp_get_theme()->get('Version'));
define('THEME_PATH', dirname(__FILE__));
define('THEME_BUILD_PATH', THEME_PATH . '/build');
define('THEME_STYLES_URL', get_template_directory_uri() . '/build/css/');
define('THEME_SCRIPTS_URL', get_template_directory_uri() . '/build/js/');
define('THEME_BLOCKS_URL', get_template_directory_uri() . '/build/blocks/');
define('THEME_ASSETS_URL', get_template_directory_uri() . '/assets/');


/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Armando Noble
 * @since 1.0.0
 */

/**
 * The theme version.
 *
 * @since 1.0.0
 */
define( 'ARMANDO_NOBLE_VERSION', wp_get_theme()->get( 'Version' ) );

/**
 * Adds theme-supports.
 *
 * @since 1.2.4
 * @return void
 */
function armando_noble_setup() {
	// Add support for Block Styles.
	add_theme_support( 'wp-block-styles' );
	// Enqueue editor styles.
	add_theme_support( 'editor-styles' );
	add_editor_style(
		array(
			'./assets/css/style-shared.css',
		)
	);
}
add_action( 'after_setup_theme', 'armando_noble_setup' );

// Block Styles
require_once 'inc/block-styles.php';

// Register Blocks
require_once 'inc/register-blocks.php';

// Block Patterns
require_once 'inc/block-pattern-categories.php';
require_once 'inc/remove-core-wp-patterns.php';

/**
 * Enqueue the style.css file.
 *
 * @return void
 * @since 1.0.0
 */
function armando_noble_styles() {
	wp_enqueue_style(
		'armando-noble-style',
		get_stylesheet_uri(),
		[],
		ARMANDO_NOBLE_VERSION
	);

	wp_enqueue_style(
		'armando-noble-shared-styles',
		get_theme_file_uri( 'assets/css/style-shared.css' ),
		[],
		ARMANDO_NOBLE_VERSION
	);
}
add_action( 'wp_enqueue_scripts', 'armando_noble_styles' );

/**
 * Show '(No title)' if post has no title.
 */
add_filter(
	'the_title',
	function( $title ) {
		if ( ! is_admin() && empty( $title ) ) {
			$title = __( '(No title)', 'armando-noble' );
		}

		return $title;
	}
);


add_image_size( 'extra-small', 50, 50 );
add_filter( 'image_size_names_choose', 'block_theme_image_sizes' );
 
function block_theme_image_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'extra-small' => __( 'Extra Small' )
    ) );
}

/**
 * The Styling of the site works as follows:
 * 2x Main Top-Level Stylesheets.
 * - 1 for the editor view - :root is replaced with .editor-styles-wrapper, so has to be it's own file.
 * - 1 for the frontend view.
 * - Both of these stylsheets use the main stylesheet called "styles.scss". Any Styles, besides CSS Properties, belong in here.
 * CSS Properties Top-Level Stylesheet
 * - This is also in it's own stylesheet so it can be imported into both the editor view and frontend view without anything being replaced.
 */

// Enqueueing Styles
function enqueue_styles() {
	wp_enqueue_style('np-css-properties', THEME_STYLES_URL . 'css-properties.css', [], THEME_VERSION);

	if (!is_admin()) { // Check if it's not the admin dashboard
		wp_enqueue_style('np-frontend-styles', THEME_STYLES_URL . 'frontend-styles.css', [], THEME_VERSION);
	}
}
add_action('enqueue_block_assets', 'enqueue_styles');


// Admin Scripts
function block_admin_scripts() {
    wp_enqueue_script( 'np-editor-scripts', THEME_SCRIPTS_URL . 'editor.js', [], THEME_VERSION, true );
}
add_action( 'admin_enqueue_scripts', 'block_admin_scripts' );

// Editor Styles
function editor_styles() {
	add_editor_style( 'build/styles/editor-styles.css' );
}
add_action( 'after_setup_theme', 'editor_styles', 10 );

