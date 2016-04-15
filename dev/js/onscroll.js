// JavaScript Document
jQuery(document).ready(function($) {
$(window).scroll(function() {
		$('#scrollreveal').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 500) {
					$(this).addClass("fadeIn");
				}		
			});
	});
});	
