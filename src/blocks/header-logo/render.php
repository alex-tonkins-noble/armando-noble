<?php

$disableHover = $attributes['disableHover'];
$backgroundColor = $attributes['backgroundColor'];
$logoColor = $attributes['logoColor'];

$backgroundColorStyle = $backgroundColor ? 'background-color:' . $backgroundColor : null;
$logoImgStyle = $logoColor ? 'background-color:' . $logoColor : null;

?>

<div <?php echo get_block_wrapper_attributes(['style' => $backgroundColorStyle]); ?>>
    <a
        class="wp-block-np-header-logo__inner"
        href=<?php echo get_home_url(); ?>
        target="_self"
        title="Noble Performs"
        >
        <?php if (!$disableHover): ?>
            <div class="logo-bb">
                <div class="logo-bb__img"<?php echo $logoImgStyle ? ' style="' . $logoImgStyle . '"' : ''; ?>></div>
            </div>
        <?php endif; ?>
        <div class="logo-img">
            <div class="logo-img__img"<?php echo $logoImgStyle ? ' style="' . $logoImgStyle . '"' : ''; ?>></div>
        </div>
    </a>
</div>
