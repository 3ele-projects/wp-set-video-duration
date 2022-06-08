<?php
/**
 * Plugin Name:     Wp Set Video Duration
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     wp-set-video-duration
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wp_Set_Video_Duration
 */

// Your code starts here.


add_action( 'wp_ajax_my_action', 'my_action' );
add_action( 'wp_ajax_nopriv_my_action', 'my_action' );



function my_action() {


	$user_id = intval( $_POST['user_id'] );
    $post_id = intval( $_POST['post_id'] );
	$data = get_user_meta($user_id, 'array');

	$data[$post_id] = $_POST['data'];
   update_user_meta($user_id, 'array',  $data);


    
       

	wp_die(); // this is required to terminate immediately and return a proper response
}


if(!function_exists('get_post_id')){
    function get_post_id() {
        global $post;
	
        $deps = array('jquery');
        $version= '1.0'; 
        $in_footer = true;
        wp_enqueue_script('wp-media-track', plugins_url( '/js/wp-media-track.js', __FILE__ ), array('jquery'), '', true);
        wp_localize_script('wp-media-track', 'my_script_vars', array(
                'post_id' => $post->ID,
                'user_id' => get_current_user_id(),
                'meta' => get_user_meta( get_current_user_id(), 'array' )
        )
        );
        wp_localize_script( 'wp-media-track', 'ajax_object',
            array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 'we_value' => 1234 ) );
    }
}
add_action('wp_enqueue_scripts', 'get_post_id');


function get_user_data(){
	     global $post;
	$data = array(
                'post_id' => $post->ID,
                'user_id' => get_current_user_id(),
                'meta' => get_user_meta(get_current_user_id(), 'array' )
		 );
		wp_die(); // this is required to terminate immediately and return a proper response
}



