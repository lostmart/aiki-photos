<?php

// Normalize.css
function add_normalize_CSS() {
   wp_enqueue_style( 'normalize-styles', "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css");
   wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/main.min.css',  );
}

add_action('wp_enqueue_scripts', 'add_normalize_CSS');