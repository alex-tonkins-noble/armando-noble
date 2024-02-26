<?php

/**
 * Generate classes if the Section Size and Content Size has been chosen AND they are not the default. This is to not have any unnecessary HTML Classes.
 * - Full = Section Default
 * - Regular = Content Default
 * NOTE: Also declared in edit.js
 */

$contentSize = $attributes['contentSize'];
$contentSizeClass = $contentSize ? ' content--size-'.$contentSize : '';

?>

<div <?php echo get_block_wrapper_attributes(['class' => '']); ?>>
    <div class="vertical-content">
        <h3>Test Vertical Title</h3>
    </div>
    <div class="wp-block-np-section__container<?php echo $contentSizeClass ?>">
        <?php echo $content ?>
    </div>
</div>