
function get_data() {
    var videoList = document.getElementsByTagName("video");
    var audioList = document.getElementsByTagName("audio");
    console.log(videoList,audioList );
}

function senddata() {
		var data = {
			'action': 'my_action',
            'user_id': my_script_vars.user_id,
            'post_id': my_script_vars.post_id
		};

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajax_object.ajax_url, data, function(response) {
          console.log(response)
		});
}
jQuery(document).ready(function($) {
    console.log(my_script_vars.meta)
    get_data()
});


jQuery(window).bind('beforeunload', function(){
    senddata()
  });
