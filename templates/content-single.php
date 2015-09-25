<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <header style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(<?php echo wp_get_attachment_url(get_post_thumbnail_id(get_the_ID())); ?>); background-size: cover; background-position: center">
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <?php get_template_part('templates/entry-meta'); ?>
    </header>
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
    <footer>
      <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
      <div class="post-nav row">
        <div class="col-sm-6 next-link"><?php next_post_link('&laquo; %link ', '%title'); ?></div>
        <div class="col-sm-6 prev-link"><?php previous_post_link('%link &raquo;' , '%title'); ?></div>
      </div>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>
