<?php

/**
 * For use within Post Template ONLY.
 * The reason for creating this block is to remove all wrapper elements that would've come with the core Post Content Block.
 */

// Get the post content
$content = get_the_content();

// Parse the content into blocks
$blocks = parse_blocks($content);

// Loop through each block
foreach ($blocks as $block) {
    // Output the block content
    echo render_block($block);
}

?>
