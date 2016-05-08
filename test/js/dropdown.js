/* This function is used for dropdown menus */
function uiDrop(ths,target, auto){	
	if( $(target).is(':visible')){
		$(ths).removeClass('active');
		$(target).slideUp('fast');
	}
	else
	{
		$(ths).addClass('active');
		$(target).slideDown('fast');
	}
	
	$(target).mouseup(function(e){
		e.preventDefault();
		return false;
	});
	
	var platform = navigator.platform; 

 	if( platform == 'iPad'){
		$(document).unbind('touchstart');
		
		document.addEventListener('touchend', function(e) {
			if(auto == 'true'){
				$(target).slideUp('fast');
				e.preventDefault();
				return false;
			}
		}, false);
	
	}
	
	var userAgent = navigator.userAgent.toLowerCase();
    var isIphone = (userAgent.indexOf('iphone') != -1) ? true : false;
 
    if (isIphone) {
		$('#body').unbind('mouseup');	
		$('#body').mouseup(function(e){
			if(auto == 'true')
				$(target).slideUp('fast');
		});
	}
	else{
		$(document).unbind('mouseup');	
		$(document).mouseup(function(e){
			if(auto == 'true')
				$(target).slideUp('fast');
				
		});
	}
};
					/*$(document).ready(function(){ 
						$('.citysearch').click(function(){ 
						$('.city-detail').toggle();
						$('.bgdull').toggle();
					});					
					$('.close-btn').click(function(){
						$('.city-detail').hide();
						$('.bgdull').hide();
					});
						
					});*/
				
               <!--<div class="bgdull"></div>-->