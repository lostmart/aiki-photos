/*server side analogue is function display_embed in WDWLibraryEmbed*/
/*params
  embed_type: string , one of predefined accepted types
  embed_id: string, id of media in corresponding host, or url if no unique id system is defined for host
  attrs: object with html attributes and values format e.g. {width:'100px', style:"display:inline;"}
*/

function spider_display_embed(embed_type, file_url, embed_id, attrs){ 

  var html_to_insert = '';
  
  switch(embed_type) {
    case 'EMBED_OEMBED_YOUTUBE_VIDEO':
      var oembed_youtube_html ='<iframe ';
      if(embed_id!=''){
        oembed_youtube_html += ' src="' + '//www.youtube.com/embed/'+embed_id + '?enablejsapi=1&wmode=transparent"';
      }
      for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_youtube_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_youtube_html += " ></iframe>";
      html_to_insert += oembed_youtube_html;
            
      break;
    case 'EMBED_OEMBED_VIMEO_VIDEO':
      var oembed_vimeo_html ='<iframe ';
      if(embed_id!=''){
        oembed_vimeo_html += ' src="' + '//player.vimeo.com/video/'+embed_id + '?enablejsapi=1"';
      }
      for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_vimeo_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_vimeo_html += " ></iframe>";
      html_to_insert += oembed_vimeo_html;
            
      break;
    case 'EMBED_OEMBED_FLICKR_IMAGE':

        var oembed_flickr_html ='<div ';     
        for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_flickr_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
        oembed_flickr_html += " >";
        if(embed_id!=''){
        
        oembed_flickr_html += '<img src="'+embed_id+'"'+ 
        ' style="'+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'auto !important'+
        '; height:'+ 'auto !important' + 
        ';">';
        

        }

        oembed_flickr_html +="</div>";

        html_to_insert += oembed_flickr_html;
        break;
      case 'EMBED_OEMBED_FLICKR_VIDEO':
        /* code...*/
        break;

    case 'EMBED_OEMBED_INSTAGRAM_VIDEO':
      var oembed_instagram_html ='<div ';     
        for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_instagram_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_instagram_html += " >";
        if(embed_id!=''){

        /*oembed_instagram_html += '<iframe src="'+embed_id+'"'+ 
        ' style="'+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'auto'+
        '; height:'+ '100%' + " "+
        '; margin:0;"'+
        'frameborder="0" scrolling="no" allowtransparency="false"></iframe>';
        */
        oembed_instagram_html += '<video style="width:auto !important; height:auto !important; max-width:100% !important; max-height:100% !important; margin:0 !important;" controls>'+
        '<source src="'+embed_id+
        '" type="video/mp4"> Your browser does not support the video tag. </video>';

        }
        
        
        oembed_instagram_html +="</div>";

        html_to_insert += oembed_instagram_html;

        break;

    case 'EMBED_OEMBED_INSTAGRAM_IMAGE':
      var oembed_instagram_html ='<div ';     
        for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_instagram_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_instagram_html += " >";
        if(embed_id!=''){

        oembed_instagram_html += '<img src="//instagram.com/p/'+embed_id+'/media/?size=l"'+ 
        ' style=" '+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'auto'+
        '; height:'+ '100%' +
        ';">';
        }
        oembed_instagram_html +="</div>";

        html_to_insert += oembed_instagram_html;

    break;
    case 'EMBED_OEMBED_INSTAGRAM_POST':
      var oembed_instagram_html ='<div '; 
      var id = '';
        for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_instagram_html += ' '+ attr + '="'+ attrs[attr] + '"';
            if(attr == 'CLASS' || attr =='class' || attr =='Class'){
              obj_class = attrs[attr];
            }
          }
        }
      }
      oembed_instagram_html += " >";
        if(embed_id!=''){

        oembed_instagram_html += '<iframe class="inner_instagram_iframe_'+obj_class+'" src="//instagr.am/p/'+embed_id+'/embed/?enablejsapi=1"'+ 
        ' style="'+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'100%'+
        '; height:'+ '100%' + 
        '; margin:0'+
        '; display:table-cell; vertical-align:middle;"'+
        'frameborder="0" scrolling="no" allowtransparency="false" allowfullscreen'+
        '></iframe>';
        }

        oembed_instagram_html +="</div>";

        html_to_insert += oembed_instagram_html;

    break;       
	case 'EMBED_OEMBED_FACEBOOK_IMAGE':
      var oembed_facebook_html ='<div ';     
        for (attr in attrs) {
          if(!(/src/i).test(attr)){
            if(attr != '' && attrs[attr] != ''){
              oembed_facebook_html += ' '+ attr + '="'+ attrs[attr] + '"';
            }
          }
        }
      oembed_facebook_html += " >";
      if(embed_id!=''){
        oembed_facebook_html += '<img src="'+file_url+'"'+ 
        ' style=" '+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'auto'+
        '; height:'+ '100%' +
        ';">';
      }
      oembed_facebook_html +="</div>";
      html_to_insert += oembed_facebook_html;
    break; 	
	case 'EMBED_OEMBED_FACEBOOK_VIDEO': 
      var oembed_facebook_video_html ='<div ';     
        for (attr in attrs) {
          if(!(/src/i).test(attr)){
            if(attr != '' && attrs[attr] != ''){
              oembed_facebook_video_html += ' '+ attr + '="'+ attrs[attr] + '"';
            }
          }
        }
      oembed_facebook_video_html += " >";
      if(embed_id!=''){
        oembed_facebook_video_html += '<iframe src="https://www.facebook.com/video/embed?video_id='+file_url+'"' +
        ' style="'+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'100%'+
        '; height:'+ '100%' + 
        '; margin:0'+
        '; display:table-cell; vertical-align:middle;"'+
        'frameborder="0" scrolling="no" allowtransparency="false" allowfullscreen'+
        '></iframe>';
      }
      oembed_facebook_video_html +="</div>";
      html_to_insert += oembed_facebook_video_html;
    break;  
    case 'EMBED_OEMBED_DAILYMOTION_VIDEO':
      var oembed_dailymotion_html ='<iframe ';
      if(embed_id!=''){
        oembed_dailymotion_html += ' src="' + '//www.dailymotion.com/embed/video/'+embed_id + '?api=postMessage"';
      }
      for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_dailymotion_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_dailymotion_html += " ></iframe>";
      html_to_insert += oembed_dailymotion_html;
            
      break;
    case 'EMBED_OEMBED_IMGUR':
    /*not working yet*/
      var oembed_imgur_html ='<div ';     
        for (attr in attrs) {
        if(!(/src/i).test(attr)){
          if(attr != '' && attrs[attr] != ''){
            oembed_instagram_html += ' '+ attr + '="'+ attrs[attr] + '"';
          }
        }
      }
      oembed_imgur_html += " >";
        if(embed_id!=''){

        oembed_imgur_html += '<img src="'+embed_id+'"'+ 
        ' style="'+
        'max-width:'+'100%'+" !important"+
        '; max-height:'+'100%'+" !important"+
        '; width:'+'auto'+
        '; height:'+ 'auto' + " !important"+
        ';">';
        }
        oembed_imgur_html +="</div>";

        html_to_insert += oembed_imgur_html;

        break;              
    default:
      ;
  }
  
  return html_to_insert;

}
/**
 * @param from_popup: optional, true if from bulk embed popup, false(default) if from instagram gallery
 * @return "ok" if adds instagram gallery, false if any error when adding instagram gallery
 */


function add_instagram_gallery(instagram_client_id, from_popup) {

  from_popup = typeof from_popup !== 'undefined' ? from_popup : false;
  
  /*if bulk_embed action*/
  if(from_popup === true){
    if (bwg_check_instagram_gallery_input(instagram_client_id, from_popup)){
      return false;
    }
    var whole_post = '0';
    if(jQuery("input[name=popup_instagram_post_gallery]:checked").val() == 1){
      whole_post = '1';  
    };    

    var instagram_user = encodeURI(jQuery("#popup_instagram_gallery_source").val());
    var autogallery_image_number = encodeURI(jQuery("#popup_instagram_image_number").val());

  }
  else{
    if(!bwg_check_gallery_empty(false, true)){
      return false;
    }
    /*check if there is problem with input*/
    if (bwg_check_instagram_gallery_input(instagram_client_id, from_popup)){
      return false;
    }
    var whole_post = '0';
    if(jQuery("input[name=instagram_post_gallery]:checked").val() == 1){
      whole_post = '1';  
    };
    
    var instagram_user = encodeURI(jQuery("#gallery_source").val());
    var update_flag = jQuery("input[name=update_flag]:checked").val();
    var autogallery_image_number = encodeURI(jQuery("#autogallery_image_number").val());
  }
  jQuery('#bulk_embed').hide();
  jQuery('#opacity_div').show();
  jQuery('#loading_div').show();

 /*prepare data for request*/
  var filesValid = [];
  var data = {
    'action': 'addInstagramGallery',
    'instagram_user': instagram_user,
    'instagram_client_id': instagram_client_id,
    'whole_post': whole_post,
    'autogallery_image_number':autogallery_image_number,
    'update_flag':update_flag,
    'async':true
  };

   // get response data. Here we use the server as a proxy, since Cross-Origin Resource Sharing AJAX is forbidden.
  jQuery.post(ajax_url, data, function(response) {
    if(response == false){

      alert('Error: cannot get response from the server.');
      jQuery('#opacity_div').hide();
      jQuery('#loading_div').hide();
      if(from_popup){
        jQuery('#bulk_embed').show();
      }
      return false;
    }
    else{

      var index_start = response.indexOf("WD_delimiter_start");
      var index_end = response.indexOf("WD_delimiter_end");
      if(index_start == -1 || index_end == -1){
        jQuery('#opacity_div').hide();
        jQuery('#loading_div').hide();
        if(from_popup){
          jQuery('#bulk_embed').show();
        }
        return false;
      }

      /*filter out other echoed characters*/
      /*18 is the length of "wd_delimiter_start"*/
      response = response.substring(index_start+18,index_end);       
      response_JSON = jQuery.parseJSON(response);

      if(!response_JSON ){
        alert('There is some error. Cannot add Instagram gallery.');
        jQuery('#opacity_div').hide();
        jQuery('#loading_div').hide();
        if(from_popup){
          jQuery('#bulk_embed').show();
        }
        return false;
      }
      else{
        if(response_JSON[0] == 'error'){
          alert('Error: ' + jQuery.parseJSON(response)[1]);
          jQuery('#opacity_div').hide();
          jQuery('#loading_div').hide();
          if(from_popup){
            jQuery('#bulk_embed').show();
          }
          return false;
        }
        else{
          var len = response_JSON.length;
          for (var i=1; i<=len; i++) {
            if(response_JSON[len-i]!= false){
              filesValid.push(response_JSON[len-i]);
            }
          }
          //console.log(filesValid);
          bwg_add_image(filesValid);
          if(!from_popup){
            bwg_gallery_update_flag();
            jQuery('#tr_instagram_gallery_add_button').hide();
          }

          jQuery('#opacity_div').hide();
          jQuery('#loading_div').hide();
          if(from_popup){
            jQuery('.opacity_bulk_embed').hide();
          }         
          return "ok";
        }

      }
      
    }/*end of considering all cases*/
   
  });

}
		
function add_facebook_gallery(mixed_gallery) {
  if(mixed_gallery) {
	//if mixed gallery is active
	jQuery('#bulk_embed').hide();
	jQuery('#opacity_div').show();
	jQuery('#loading_div').show();
	var album_url = jQuery('#popup_facebook_gallery_album_url').val();
	var album_limit = jQuery('#popup_facebook_gallery_album_limit').val();
	var content_type = jQuery('input[name="popup_facebook_gallery_album_content_type"]:checked').val(); 
  }
  else {
	//if facebook gallery is active
	var album_url = jQuery('#facebook_gallery_source').val();
	var album_limit = jQuery('#facebook_gallery_image_limit').val();
	var content_type = jQuery('input[name="facebook_content_type"]:checked').val();
	
	if(content_type == '0')
	  content_type = 'regular';
	else if(content_type == '1')
	  content_type = 'post';		
  }
  
  jQuery('#bulk_embed').hide();
  jQuery('#opacity_div').show();
  jQuery('#loading_div').show();
  
  var files = [];
  var data = {
	'action': 'addFacebookGallery',
	'album_url': album_url,
	'album_limit': album_limit,
	'content_type': content_type
  };
  
  jQuery.post(
	ajax_url, 
	data, 
	function(response) { 	
	  //console.log(response); 		  
	  var response_JSON	= jQuery.parseJSON(response);		  
	  
	  if(response_JSON[0] == 'error'){
		alert('Error: ' + response_JSON[1]);
		jQuery('#opacity_div').hide();
		jQuery('#loading_div').hide();
		return '';
	  }
	  bwg_add_image(response_JSON);
	}
  ).done(function() {
	jQuery('#opacity_div').hide();
	jQuery('#loading_div').hide();
	jQuery('.opacity_bulk_embed').hide();
  });
}