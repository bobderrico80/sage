<div class="container-fluid slider-container">
  <div class="slider-button slider-button-left">
    <i class="glyphicon glyphicon-menu-left"></i>
  </div>
  <div class="slider-button slider-button-right">
    <i class="glyphicon glyphicon-menu-right"></i>
  </div>
  <div class="row slider">
    <?php 
      $args = array (
        'posts_per_page'=>10,
        'post__not_in' => get_option('sticky_posts')
      );
      $posts = get_posts($args);
      foreach ($posts as $post) :
        setup_postdata($post);
        $featuredImage = wp_get_attachment_url(get_post_thumbnail_id(get_the_ID()));
    ?>
    
      <div class="slide" id="<?php the_ID()?>" style="background-image: url(<?php echo $featuredImage;?>)">
        <div class="slide-overlay">
          <h1 class="slide-title"><a href="<?php the_permalink(); ?>"><?php the_title()?></a></h1>
        </div>
      </div>
    
      <?php
        endforeach
      ?>
  </div>
</div>
