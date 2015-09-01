<header class="banner jumbotron" role="banner">
  <a class="brand" href="<?= esc_url(home_url('/')); ?>">
    <div class="banner-image" title='<?php bloginfo('name'); ?>'></div>
  </a>
  <nav role="navigation">
    <?php
    if (has_nav_menu('primary_navigation')) :
      wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
    endif;
    ?>
  </nav>
</header>
