function get_data() {
	let obj = {
		
	}
	let v_arr = []
	let a_arr = { }	
    var videoList = document.getElementsByTagName("video");
    var audioList = document.getElementsByTagName("audio");
    
	for (let i=0; i< videoList.length; i++) {
		let id = videoList[i].id
		let duration = videoList[i].duration
		v_arr.push({id,duration})
}

		for (let i=0; i< audioList.length; i++) {
		let id = audioList[i].id
		let duration = audioList[i].duration
		a_arr[id] = duration
}
	obj['video'] = v_arr
	obj['audio'] = a_arr
	return obj
}

function set_data() {
	

	


	if( my_script_vars.meta[0][my_script_vars.post_id] ){
	let v_arr = my_script_vars.meta[0][my_script_vars.post_id]['video'];	
	for (let i=0; i<  v_arr.length; i++) {								   
	document.getElementById('video-1').addEventListener('loadedmetadata', function() {
  this.currentTime = 10;
}, false);
		
									     }
						  }

}


function senddata(data) {
		var p_data = {
			'action': 'my_action',
            'user_id': my_script_vars.user_id,
            'post_id': my_script_vars.post_id,
			'data': data
		};

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajax_object.ajax_url, p_data, function(response) {
          console.log(response)
		});
}



jQuery(document).ready(function($) {

	//set_data();
	   senddata(get_data())

});


jQuery(window).bind('beforeunload', function(){
    senddata(get_data())
  });
