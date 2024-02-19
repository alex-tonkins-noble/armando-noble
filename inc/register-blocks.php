<?php

// Register Custom Gutenberg Blocks
function register_custom_blocks() {
    foreach ( glob( THEME_BUILD_PATH . DIRECTORY_SEPARATOR . 'blocks' . DIRECTORY_SEPARATOR . '*' ) as $path ) {
        if ( is_dir( $path ) && file_exists( $path . DIRECTORY_SEPARATOR . 'block.json' ) ) {
            register_block_type( $path . DIRECTORY_SEPARATOR . 'block.json' );
        }
    }
}

add_action('init', 'register_custom_blocks');