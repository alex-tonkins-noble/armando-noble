<?php

$contentSize = $attributes['contentSize'];
$contentSizeClass = $contentSize ? ' content--size-'.$contentSize : '';

$addSectionTitle = $attributes['addSectionTitle'];
$sectionTitleContent = $attributes['sectionTitleContent'];
$sectionTitleHtmlTag = $attributes['sectionTitleHtmlTag'] ? $attributes['sectionTitleHtmlTag'] : 'h2';

?>

<div <?php echo get_block_wrapper_attributes(['class' => '']); ?>>
    <?php if ($addSectionTitle && $sectionTitleContent && $sectionTitleHtmlTag): ?>
        <div class="vertical-content">
            <<?php echo $sectionTitleHtmlTag ?>><?php echo $sectionTitleContent ?></<?php echo $sectionTitleHtmlTag ?>>
        </div>
    <?php endif; ?>
    <div class="wp-block-np-section__container<?php echo $contentSizeClass ?>">
        <?php echo $content ?>
    </div>
</div>