
/*
$('#home-carousel-bebest').carousel({
  interval: 4000
});
*/
/*
*/

/* code from http://codepen.io/betdream/pen/frDqh */
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


$(window).scroll(function() {
	$('#scrollreveal').each(function(){
		var imagePos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 500) {
				$(this).addClass("fadeIn");
			}		
		});
});
