<?php

// Bootstrap css & theme css
function add_CSS_styles() {
   // bootstrap css
   wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/bootstrap/bootstrap.min.css');
   // bootstrap js
   wp_register_script('bootstrapJs', 
   get_template_directory_uri() .'/js/bootstrap.bundle.min.js',
   array (),
   false, false);
   wp_enqueue_script('bootstrapJs');
   // custom css
   wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/main.min.css',  );
   // custom js
   wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/js/script.js' );
   

}




add_action('wp_enqueue_scripts', 'add_CSS_styles');
